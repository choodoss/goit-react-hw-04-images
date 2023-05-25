import { useState } from "react";
import { SearchFormCont, SearchFormBody, SearchInput, SearchButton, SelectGroup, Select, Filters } from './SearchForm.styled'
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default function SearchForm({ submitted, onSubmit }) {
    const [searchName, setSearchName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedColor, setSelectedColor] = useState('all');
    const [selectedOrientation, setSelectedOrientation] = useState('all');
    const [selectedImageType, setSelectedImageType] = useState('all');

    const hendleSearchValue = ({ currentTarget: { value } }) => {
        setSearchName(value);
    };

    const hendleSubmitForm = (e) => {
        e.preventDefault();
        if (searchName.trim().length === 0) {
            return toast.error("Введіть валідний запит")
        }
        onSubmit({ searchName: searchName })
        setSearchName('');
        setSelectedCategory('all');
        setSelectedColor('all');
        setSelectedOrientation('all');
        setSelectedImageType('all');
    };

    const hendleFilterForm = ({ currentTarget: { name, value } }) => {
        if (name === 'searchQuery') setSearchName(value);
        if (name === 'category') setSelectedCategory(value);
        if (name === 'colors') setSelectedColor(value);
        if (name === 'orientation') setSelectedOrientation(value);
        if (name === 'image_type') setSelectedImageType(value);
        onSubmit({ [name]: value });
    };

    const searchForm =
        <section>
            <SearchFormCont onSubmit={hendleSubmitForm} submitted={submitted} autoComplete="off" name="searchForm">
                <SearchFormBody>
                    <SearchInput onChange={hendleSearchValue} type="text" name="searchQuery" placeholder="Search images and photos" value={searchName} autoFocus />
                    <SearchButton type="submit" ><BsSearch fill="currentColor" /></SearchButton>
                </SearchFormBody>
                {submitted && <Filters className="filters">
                    <SelectGroup>
                        <Select onChange={hendleFilterForm} name="category" value={selectedCategory}>
                            <option value="all">category</option>
                            <option value="backgrounds">backgrounds</option>
                            <option value="fashion">fashion</option>
                            <option value="nature">nature</option>
                            <option value="science">science</option>
                            <option value="education">education</option>
                            <option value="feelings">feelings</option>
                            <option value="health">health</option>
                            <option value="people">people</option>
                            <option value="religion">religion</option>
                            <option value="places">places</option>
                            <option value="animals">animals</option>
                            <option value="industry">industry</option>
                            <option value="computer">computer</option>
                            <option value="food">food</option>
                            <option value="sports">sports</option>
                            <option value="transportation">transportation</option>
                            <option value="travel">travel</option>
                            <option value="buildings">buildings</option>
                            <option value="music">music</option>
                        </Select>
                    </SelectGroup>
                    <SelectGroup>
                        <Select onChange={hendleFilterForm} name="colors" value={selectedColor}>
                            <option value="all">colors</option>
                            <option value="grayscale">grayscale</option>
                            <option value="transparent">transparent</option>
                            <option value="red">red</option>
                            <option value="orange">orange</option>
                            <option value="yellow">yellow</option>
                            <option value="green">green</option>
                            <option value="turquoise">turquoise</option>
                            <option value="blue">blue</option>
                            <option value="lilac">lilac</option>
                            <option value="white">white</option>
                            <option value="black">black</option>
                            <option value="brown">brown</option>
                        </Select>
                    </SelectGroup>
                    <SelectGroup>
                        <Select onChange={hendleFilterForm} name="orientation" value={selectedOrientation}>
                            <option value="all">orientation</option>
                            <option value="horizontal">horizontal</option>
                            <option value="vertical">vertical</option>
                        </Select>
                    </SelectGroup>
                    <SelectGroup>
                        <Select onChange={hendleFilterForm} name="image_type" value={selectedImageType}>
                            <option value="all">image type</option>
                            <option value="photo">photo</option>
                            <option value="illustration">illustration</option>
                            <option value="vector">vector</option>
                        </Select>
                    </SelectGroup>
                </Filters>}
            </SearchFormCont>
        </section>;
    return searchForm;
};


