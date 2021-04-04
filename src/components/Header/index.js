
import React, { useState } from 'react' 
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import '../Header/style.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const API_URL = "http://localhost:1337"

const formatImageUrl = (url) => `${API_URL}${url}`

const Header = (data) => {  

    const [value, setValue] = useState('English')

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log('Values:', event.target.value)
    }
    
    return(
    <>
      <div className="main-header">
        <div className="header-container">
            <div className="title">
              <h2> BlogPost </h2>
            </div>
            <div className="languages-wrapper">
              <FormControl component="fieldset">
                <RadioGroup aria-label="language" name="language" value={value} onChange={handleChange} row>
                  <FormControlLabel value="English" control={<Radio />} label="eng" />
                  <FormControlLabel value="Hindi" control={<Radio />} label="hi" />
                  <FormControlLabel value="French" control={<Radio />} label="fr"/>
                  <FormControlLabel value="German" control={<Radio />} label="de"/>
                </RadioGroup>
             </FormControl>
            </div>
        </div>
      </div>
      
      <div className="blogs-wrapper">
        { value==='Hindi' 
          ?
          Array.from(data.articles).map( eachArticle => { 
            
            const url = eachArticle.image && eachArticle.image.url
            return(
              <Paper key={eachArticle.id} className="article-main">
                <h2>{eachArticle.title_hi} </h2>
                <img className="image-article" src={formatImageUrl(url)}/>
                <p className="article-desc">{eachArticle.description_hi}</p>
              </Paper>
          )}) 
          :
          value==='French' 
          ?
          Array.from(data.articles).map( eachArticle => { 
            
            const url = eachArticle.image && eachArticle.image.url
            return(
              <Paper key={eachArticle.id} className="article-main">
                <h2>{eachArticle.title_fr} </h2>
                <img className="image-article" src={formatImageUrl(url)}/>
                <p className="article-desc">{eachArticle.description_fr}</p>
              </Paper>
          )}) 
          :
          value==='German' 
          ?
          Array.from(data.articles).map( eachArticle => { 
            
            const url = eachArticle.image && eachArticle.image.url
            return(
              <Paper key={eachArticle.id} className="article-main">
                <h2>{eachArticle.title_de} </h2>
                <img className="image-article" src={formatImageUrl(url)}/>
                <p className="article-desc">{eachArticle.description_de}</p>
              </Paper>
          )}) 
          :
          Array.from(data.articles).map( eachArticle => { 
            
            const url = eachArticle.image && eachArticle.image.url
            return(
              <Paper key={eachArticle.id} className="article-main">
                <h2>{eachArticle.title_en} </h2>
                <img className="image-article" src={formatImageUrl(url)}/>
                <p className="article-desc">{eachArticle.description_en}</p>
              </Paper>
          )}) 
        }

        
      </div>
    </>
    )
}

export default Header;