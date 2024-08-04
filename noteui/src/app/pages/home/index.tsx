import React, { useEffect, useState } from 'react'
import { styles } from './style';
import { Container, ToDoList } from '../../components/index'
import { useLanguageContext } from '../../context/localization/Localization';
import { useThemeContext } from '../../context/theme/Theme';
import noteService from '../../services/NoteService';
import NoteDto from '../../services/Shared/NoteDto';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../../context/authentication/Authentication';
import AddNoteDto from '../../services/Shared/AddNoteDto';


function Home() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const classes = styles(theme);
  const [notes, setNotes] = useState<NoteDto[]>();
  const { language } = useLanguageContext();
  const { user } = useAuthContext();

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
      <div className={classes.welcomeText}>
        <h1>{language.hello}, {String(user.UserName)}</h1>
      </div>
      <div className={classes.title}>
        <h4>{language.title}</h4>
      </div>
      <hr className={classes.hr} />
      <div className={classes.list}>
        {notes?.map((note, key) =>
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
        )}

        <Link className={classes.link} onClick={createNote} to={""}>
          <div className={classes.note}>
            <div className={classes.iconBox}>
              <h2><FontAwesomeIcon icon={faSquarePlus} /></h2>
            </div>
            <div className={classes.noteTitle}>
              <h4>{language.newNote}</h4>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <ToDoList></ToDoList>
      </div>
    </Container>
  )
}
export default Home