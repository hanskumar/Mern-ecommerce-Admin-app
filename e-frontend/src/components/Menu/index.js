import React,{useEffect} from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../actions';


const Menu = () => {

    const categories = useSelector(state => state.categories);
    

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllCategory());
    }, []);
  
    

    const renderCategories = (categories) => {
        let myCategories = [];

        //console.log("Category::",categories);

        for (let category of categories) {

            myCategories.push(
                <li key={category.name}>
                    {category.parentId ? 
                    <a href={`${category.slug}`}>{category.name}</a>
                    : <span>{category.name}</span>
                    }
                    {/* {<ul>{renderCategories(category.children)}</ul>}  */}
                </li>
            );
        }
        return myCategories;
    }


    return (
        <div className="menuHeader">
            <ul>
                 {  renderCategories(categories.categories) }  
            </ul>

        </div>
    )
}

export default Menu
