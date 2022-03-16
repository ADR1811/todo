import {useState} from "react";

export default function Form({setCards}) {

    const [formTitle, setFormTitle] = useState('');
    const [formContent, setFormContent] = useState('');

    const handleTitleChange = e => {
        setFormTitle('À faire : '+e.target.value);    
    }

    const handleContentChange = e => {
        setFormContent(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setCards(
            previousCard => [{title: formTitle, content: formContent}, ...previousCard]
        );
        
    }

    return(
        <form className='my-5 mx-auto' style={{maxWidth: '450px'}} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInput1" className="form-Label">Action TODO</label>
                <input type="text" className="form-control" id="exampleInput1"
                    onChange={handleTitleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInput2" className="form-Label">Description</label>
                <input type="text" className="form-control" id="exampleInput2"
                    onChange={handleContentChange}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}