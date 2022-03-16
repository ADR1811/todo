
export default function DeleteButton({id}) {
    // add setCards to local storage
    
    const handleDelete = event => {
         event.preventDefault();
         console.log('delete button clicked'+ id);
    }

    return (
        <form className="form-inline" onSubmit={handleDelete}>
                <button type="submit" className="btn btn-primary">Delete</button>
        </form>
    )
}