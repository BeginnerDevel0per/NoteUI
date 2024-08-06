import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import EditorJS, { BlockToolConstructable, EditorConfig, OutputData } from '@editorjs/editorjs';
import { styles } from './style';
import { useThemeContext } from '../../context/theme/Theme';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import noteService from '../../services/NoteService';
import AddNoteImageDto from '../../services/Shared/AddNoteImageDto';
import UpdateNoteDto from '../../services/Shared/UpdateNoteDto';

const CodeTool: any = require('@editorjs/code');
function Note() {
    const { theme } = useThemeContext();
    const classes = styles(theme);
    const { id } = useParams();
    const [note, setNote] = useState<OutputData>();
    const [editor, setEditor] = useState<EditorJS>();
    const titleRef: LegacyRef<HTMLInputElement> = useRef(null);
    const [title, setTitle] = useState<string>();
    const editorSettings: EditorConfig = {
        placeholder: 'Hadi harika bir hikaye yazalım!',
        holder: 'editorjs',
        data: note,
        autofocus: true,
        tools: {
            header: Header,
            list: List,
            image: {
                class: ImageTool as unknown as BlockToolConstructable,
                config: {
                    uploader: {
                        uploadByFile(file: File) {
                            return noteService.AddImage(new AddNoteImageDto(String(id), file)).then((response) => {
                                console.log(response);
                                return response;
                            })
                        }
                    }
                }
            },
            code: CodeTool,
        }
    };


    useEffect(() => {
        const apiResponse = async () => {
            const response = await noteService.GetById(String(id));
            if (response.IsSuccess) {
                setTitle(response.Content?.Title);
                setNote(JSON.parse(String(response.Content?.Content)));
            }

        }
        apiResponse();
    }, [])


    useEffect(() => {
        if (note) {
            setEditor(new EditorJS(editorSettings));
        }
    }, [note, id])


    useEffect(() => {
        const saveNote = (event: KeyboardEvent) => {
            editor?.save().then((data: OutputData) => {
                return noteService.Update(new UpdateNoteDto(String(id), { blocks: data.blocks }, String(titleRef.current?.value)));
            });
        }
        window.addEventListener("keydown", saveNote);
        return () => {
            window.removeEventListener('keydown', saveNote);
        };
    }, [editor])


    //idye göre notu bulup text editöre ve başlık  inputuna koymalıyım.
    //daha sonra her boşluk tuşuna basımda notu kaydedecek
    //1- not oluşturma kısmını hallet
    //2-not kaydetme.
    //3- not görüntüleme text ediörde

    return (
        <div className={classes.editor}>
            <div className={classes.container}>
                <input ref={titleRef} className={classes.titleInput} defaultValue={title} type='text' placeholder='Başlık' />
                <div id='editorjs'></div>
            </div>
        </div>
    )
}

export default Note