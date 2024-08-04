import React, { useEffect, useState } from 'react'
import { Container } from '../../components'
import noteService from '../../services/NoteService';
import NoteDto from '../../services/Shared/NoteDto';
import { Link, useNavigate } from 'react-router-dom';
import { styles } from './style';
import { useThemeContext } from '../../context/theme/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
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
        </Container>
    )
}

export default Notes