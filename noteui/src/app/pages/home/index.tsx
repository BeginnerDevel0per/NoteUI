import React from 'react'
import { styles } from './style';
import { Container } from '../../components/index'
import { useLanguageContext } from '../../context/localization/Localization';
function Home() {
  const classes = styles();

  const { language } = useLanguageContext();

  return (
    <Container>
      <div className={classes.title}>
        <h1>{language.title}</h1>
      </div>
      <hr className={classes.hr} />
      <div className={classes.list}>
        <div className={classes.note}>
          <h4>başlık</h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam commodi magni exercitationem, dolorem fuga ad voluptatibus illum iusto iure, quaerat officiis possimus deleniti eum repellat mollitia alias similique nesciunt sequi.
        </div>
      </div>
    </Container>
  )
}

export default Home