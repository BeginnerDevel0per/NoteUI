import React, { useEffect, useRef, useState } from 'react'
import { Button, Container } from '../../components'
import noteService from '../../services/NoteService';
import NoteDto from '../../services/Shared/NoteDto';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from './style';
import { useThemeContext } from '../../context/theme/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faEllipsis, faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useLanguageContext } from '../../context/localization/Localization';
import AddNoteDto from '../../services/Shared/AddNoteDto';

function Notes() {

    const navigate = useNavigate();
    const { language } = useLanguageContext();
    const { theme } = useThemeContext();
    const [notes, setNotes] = useState<NoteDto[]>();
    const classes = styles(theme);
    useEffect(() => {
        const apiResponse = async () => {
            const response = await noteService.GetAll();
            if (response.IsSuccess) {
                setNotes(response.Content);
            }
        }
        apiResponse();
    }, [])
    const createNote = async () => {
        const response = await noteService.AddNote(new AddNoteDto("", ""));
        if (response.IsSuccess)
            navigate("/Note/" + response.Content?.NoteId);
    }
    const RemoveNote = async (e: React.MouseEvent<HTMLButtonElement>, NoteId: string) => {
        e.preventDefault();
        e.stopPropagation();
        const response = await noteService.Remove(NoteId);
        if(response.IsSuccess)
        setNotes(notes?.filter(x => x.NoteId !== NoteId));
    }


    const [openMenuId, setOpenMenuId] = useState("");
    const openMenu = (e: React.MouseEvent<HTMLButtonElement>, noteId: string) => {
        e.preventDefault();
        e.stopPropagation();
        setOpenMenuId(openMenuId === noteId ? "" : noteId);
    }
    useEffect(() => {
        const closeMenu = (e: MouseEvent) => {
            if (openMenuId !== "") {
                setOpenMenuId("");
            }
        }
        window.addEventListener("click", closeMenu);
        return () => {
            window.removeEventListener('click', closeMenu);
        };
    }, [openMenuId]);


    return (
        <Container>
            <div className={classes.title}>
                <h1>{language.yourNotes}</h1>
            </div>
            <div className={classes.list}>
                {
                    notes?.length !== 0 ? notes?.map((note, key) =>
                        <Link key={key} className={classes.link} to={`/Note/${note.NoteId}`}>
                            <div className={classes.note}>

                                <div className={classes.menubtn}>
                                    <Button width={25} height={25} onClick={(e) => openMenu(e, note.NoteId)} >
                                        <FontAwesomeIcon icon={faEllipsis} />
                                    </Button>
                                </div>
                                {openMenuId === note.NoteId ?
                                    <div id={`menu-${note.NoteId}`} className={classes.menu}>
                                        <Button onClick={(e) => RemoveNote(e, note.NoteId)}>
                                            <FontAwesomeIcon icon={faTrash} />Sil
                                        </Button>
                                    </div>
                                    :
                                    <div></div>
                                }



                                <div className={classes.iconBox}>
                                    <h2><FontAwesomeIcon icon={faBookOpen} /></h2>
                                </div>
                                <div className={classes.noteTitle}>
                                    <h4>{note.Title ? note.Title : "başlıksız"}</h4>
                                    <h4>{new Date(note.createDate).toLocaleString()}</h4>
                                </div>
                            </div>
                        </Link>
                    ) :
                        <Link className={classes.link} onClick={createNote} to={""}>
                            <div className={classes.note}>
                                <div className={classes.iconBox}>
                                    <h2><FontAwesomeIcon icon={faSquarePlus} /></h2>
                                </div>
                                <div className={classes.noteTitle}>
                                    <h4>Yeni Not</h4>
                                </div>
                            </div>
                        </Link>
                }
            </div>
        </Container >
    )
}

export default Notes