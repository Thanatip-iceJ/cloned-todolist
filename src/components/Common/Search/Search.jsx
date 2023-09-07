import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.scss';
import {useState, useEffect} from 'react'
import useTodo from '../../../hooks/useTodo';

function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const {searchTodo} = useTodo();
  const handleChangeInput = (e) => {
    console.log(searchKeyword)
    setSearchKeyword(e.target.value);
    // searchTodo(e.target.value);
  }
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      console.log('search!!');
      if(searchKeyword !== '') searchTodo(searchKeyword);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    }
  }, [searchKeyword])
  return (
    <div className={styles.search}>
      <span className={styles.search__icon}>
        <FaSearch />
      </span>
      <input type='text' placeholder='search' className={styles.search__input} onChange={handleChangeInput}/>
    </div>
  );
}

export default Search;
