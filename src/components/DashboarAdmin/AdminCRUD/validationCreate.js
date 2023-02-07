export default function validationCreate(creatreFormItem) {
    const errors = {};
    const regexTitle = /^[a-zA-Z\s]+$/;
    const regexImageUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?.(png|jpg|jpeg)$/
    
    if(!creatreFormItem.item_type[0]) errors.item_type = 'You must choose at least one item type'
    
    if(!regexTitle.test(creatreFormItem.title)) errors.title = 'Only letters are allowed';
    else if(creatreFormItem.title.length < 5) errors.title = 'You must type more than 5 characters'
    
    if(!creatreFormItem.description) errors.description = 'You must type a description' 
    else if(creatreFormItem.description.length < 20) errors.description = 'You must type more than 20 characters'
    
    if(!regexImageUrl.test(creatreFormItem.image_detail)) errors.image_detail = 'Must be a valid url image detail'
    if(!creatreFormItem.image_detail) errors.image_detail = 'Enter a URL image detail'
    
    if(!regexImageUrl.test(creatreFormItem.image)) errors.image = 'Must be a valid url image'
    if(!creatreFormItem.image) errors.image = 'Enter a URL image'
    
    if(creatreFormItem.amount < 1000) errors.amount = 'amount must be greater than 1000'


    return errors
}