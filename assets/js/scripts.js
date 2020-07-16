document.body.appendChild(item('Lorem1'));
document.body.appendChild(item('Lorem2'));
document.body.appendChild(item('Lorem3'));
document.body.appendChild(item('Lorem4'));
document.body.appendChild(item('Lorem5'));


function item(text) {
    const checkList = document.createElement('div')
    const itemLable = document.createElement('label')
    const itemFlag = document.createElement('input')
    const itemIcon = document.createElement('i')
    const itemText = document.createElement('span')

    checkList.appendChild(itemLable)
    itemLable.appendChild(itemFlag)
    itemLable.appendChild(itemIcon)
    itemLable.appendChild(itemText)

    itemFlag.setAttribute('hidden', true)
    itemFlag.setAttribute('type', 'checkbox')

    document.body.appendChild(checkList)

    itemFlag.classList.add('checkList__itemFlag')
    itemIcon.classList.add('checkList__itemFlagIcon')
    itemText.classList.add('checkList__itemText')

    itemText.innerHTML = ' ' + text
    return checkList
}

