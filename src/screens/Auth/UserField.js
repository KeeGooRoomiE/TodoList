import React from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

//
//
//
//
//

export default class UserField extends React.Component {
    render () {
        let buttons=this.props.pressers;
        let fields=this.props.inputs;
        //let isVerified=this.props.isInputRight;
        return (
            <div> 
            <form>{
                fields.map((field) => {
                    return (
                        <div key={field.title}>
                            {field.title}
                            {field.titleNewLined ? <br/> : ""}
                            <input placeholder={field.text} type={field.secured ? "password" : "mail"} value={field.value} onChange={field.onChange} />
                        </div>
                    )
                })
            }
            {
                buttons.map ((button) => {

                    if (button.isLink)
                    {
                        return (
                            <div>
                                <Link key={button.text } to={button.link}> <button disabled={button.disabled} onClick={ () => button.reaction && button.reaction() }>{button.text}</button> </Link>
                            </div>
                        )
                    }
                    else
                    {
                        return (
                                <div key={button.text } disabled={button.disabled} onClick={()=> button.reaction && button.reaction()}>{button.text}</div>
                        )
                    }
                })
                
            }
            </form>
            </div>
        )
    }


}

