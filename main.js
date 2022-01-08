const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const form = document.querySelector('.new-form');

form.addEventListener('submit', (event) => {
    //submit이벤트가 발생하면 자동으로 페이지를 로딩함. -> event.preventDefault()로 막는다.
    event.preventDefault();
    onAdd();
})

function onAdd() {
    //1. 사용자가 입력한 text 받아옴
    const text=input.value;
    if(text === ''){
        input.focus();
        return;
    }
    //2. 새로운 아이템을 만듦(텍스트 + 삭제 버튼)
    const item = makeItem(text);
    //3. items 컨테이너 안에 새로 만든 아이템을 추가
    items.appendChild(item);
    item.scrollIntoView({block: 'center'});
    //4. 인풋을 초기화 한다.
    input.value = '';
    input.focus();
}

let id = 0;
function makeItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);

    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
            <i class="fas fa-trash-alt" data-target-id=${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>
    `;
    
    id++;

    return itemRow;
}

// addBtn.addEventListener('click', () => {
//     onAdd();
// });

// input.addEventListener('keydown', (event) => {
// // keyup일 때는 key가 내려갈때 이미 브라우저에 입력이 완료된 상태이기 때문에 preventDefault()가 실행안됨
// //     if(event.key == 'a'){
// //         event.preventDefault();
// //     }
// //맥에서 key down일 때 한글 입력시 멋대로 엔터가 조작되는 이슈가 있는데 이때는 진행중인 과정이 끝날때까지 iscomposing을 리턴해주면된다.
// // if(event.isCoposing){
// //     return;
// // }
//     if(event.key === 'Enter') {
//         onAdd();
//     }
// });

items.addEventListener('click', (event) =>{
    const targetId = event.target.dataset.targetId;
    if(targetId){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${targetId}"]`);
        toBeDeleted.remove();
    }
    
})