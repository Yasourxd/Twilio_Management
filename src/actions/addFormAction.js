const ADD_FORM = "ADD_FORM";

function addForm(ID, TITLE){
    return {
        type:ADD_FORM,
        forms: {
            ID: ID,
            TITLE: TITLE
        }
    }
}

export default addForm;