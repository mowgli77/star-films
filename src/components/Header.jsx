import React from 'react';

const Header = (props) => {

    const search = () => {
        console.log('Search')
    }
    return (
        <header className="header">
            <div className={"header__logo"}>

            </div>
            <div className={"header__search"}>
                <input placeholder={'Search film'} type={'text'} onKeyUp={search} id={'myInput'}/>
                <button>Search</button>
            </div>
        </header>
    );
}

export default Header;




