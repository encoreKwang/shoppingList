## ShoppingList
 This is a toy project for practicing html/css/vanilla javascript.
 
![shoppinglist](https://user-images.githubusercontent.com/58154661/148516628-93069e3a-b06a-43d3-a788-a8e434ac47b3.gif)
---
### 1. 기능
- shopping item 추가
- shopping item 삭제
---
### 2. UI
- icon(fontawesome) : 추가 버튼, 삭제 버튼
- 버튼에 마우스 올라갈 때 3초 동안 ease in으로 scale 1.1배 커짐
- theme: CSS Gradient
---
### 3. 구현 순서
1. 사용자가 input에 text 입력
2. 추가 버튼을 누르면 onAdd함수 호출
3. 새로운 아이템을 만듦(텍스트 + 삭제 버튼)
4. items 컨테이너 안에 새로 만든 아이템을 추가
5. 인풋을 초기화 한다.
---
### 개선사항
- LocalStorage를 만들어서 새로고침 했을때 초기화 되지 않도록 데이터를 저장해야함
- 수정 기능
- 완료 됐을때 ~~완료~~ 표시
- 총 금액 합산 표시
- 여러개 선택해서 삭제
- 한꺼번에 선택
- 한꺼번에 삭제
