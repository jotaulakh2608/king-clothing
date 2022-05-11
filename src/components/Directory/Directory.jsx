import React  from 'react';
import  MenuItem  from '../MenuItem/MenuItem.jsx';
import './Directory.scss'
import { useSelector } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directorySelector.js';

 const Directory= () =>{

  const Section = useSelector(selectDirectorySections)

   return(

    <div className='menu-directory'>
    {Section.map(({id, ...otherSectionProps}) => 
    <MenuItem key= {id} {...otherSectionProps} />)}
</div>

   )
  
   }


export default Directory