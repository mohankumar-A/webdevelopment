import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    // if (true) {
    //     throw Error("sdfsdfsdf");
    // }
    // const cardsArray = robots.map((user) => <Card key={user.id} id={user.id} name={user.name} email={user.email} />)
    return (
        <div>
            {
                /* { cardsArray } */
                robots.map((user) => <Card key={user.id} id={user.id} name={user.name} email={user.email} />)
            }
        </div>
    );
}

export default CardList;
