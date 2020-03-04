export const required = value => {
    if(!value) {
        return  "This is required value!";
    }
};

export const minLength = value => {
    if(value.length < 3){
        return "Value is too short, please!";
    }
};

export const maxLength = value => {
    if(value.length > 20) {
        return "Value is too large, please!";
    }
};