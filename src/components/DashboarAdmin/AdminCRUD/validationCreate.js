export default function validationCreate(creatreFormItem) {
    const errors = {};
    const regexName = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/;
    const regexImageUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?.(png|jpg|jpeg)$/

    if(!regexName.test(creatreFormItem.title)) errors.title = 'Only letters and numbers are allowed';
    
    if(!creatreFormItem.description) errors.description = 'You must type a description' 
    
    if(!regexImageUrl.test(creatreFormItem.image_detail)) errors.image_detail = 'Must be a valid url image detail'
    if(!creatreFormItem.image_detail) errors.image_detail = 'Enter a URL image detail'
    
    if(!regexImageUrl.test(creatreFormItem.image)) errors.image = 'Must be a valid url image'
    if(!creatreFormItem.image) errors.image = 'Enter a URL image'
    
    if(creatreFormItem.amount < 1) errors.amount = 'must be greater than or equal to one'

    if(!creatreFormItem.item_type[0]) errors.item_type = 'You must choose at least one item type'

    return errors
}