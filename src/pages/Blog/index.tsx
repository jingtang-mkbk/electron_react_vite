import React, { useEffect } from 'react';
import styles from './index.module.scss'

const Blog: React.FC = () => {

  // file
  const fileChange = (e: any) => {
    const input = e.target;
    const files = e.target.files;
    console.log('files', files)
  }


  useEffect(()=>{

    /**
     * 
     */
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    // 除true false外的第三种状态
    checkbox.indeterminate = false;
    checkbox.checked = false
  }, [])

  return (
    <>
      {/* button */}
      <div>
        <input 
          type="button" 
          value='button' 
          className={styles.btn}
        />
      </div>
      

      {/* radio */}
        <input type="radio" name="radio" value="huey" id="huey"/>
        <label htmlFor="huey">Huey</label>
        <input type="radio" name="radio" value="dewey" id="dewey"/>
        <label htmlFor="dewey">Dewey</label>
        <input type="radio" name="radio" value="louie" id="louie"/>  
        <label htmlFor="louie">Louie</label>

      {/* checkbox */}
      <div>
        <input 
          type="checkbox" 
          id='checkbox'
          value="value"
        />
        <label htmlFor="checkbox">checkbox</label>
      </div>

      {/* color */}
      <div>
        <input 
          type="color" 
          // onInput={(e)=>{console.log(e)}} 
          onChange={e=>{console.log(e)}}
        />
      </div>

      {/* file */}
      <div>
        <input type="file" id='file' onChange={fileChange}/>
      </div>
    </>
  );
}

export default Blog;
