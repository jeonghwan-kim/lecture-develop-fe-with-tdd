# 프론트엔드 개발과 TDD

## TDD 이론 

* // todo

## 자스민 소개 

* // todo

## 돔 접근 테스트 

### ClickCounter 예제 

#### 테스트하기 어려운 UI 코드 

* 관심사가 분리되지 않았음 
* 재사용성이 떨어짐 
* 자바스크립트를 별도로 빼내면 다른 곳에서도 재사용할수 있고 테스트성도 좋아짐
* UI에서 완전히 떼어놓고 코드를 모듈화 시키면 비즈니스 로직만 테스트할 수 있음
* ```
  git checkout -f 1c6e723
  ```
  
#### 테스트하기 쉬운 UI 코드 

##### ClickCountDisplay 모듈 로직 코드 테스팅

* 버튼 클릭 이벤트 처리기의 역할
    * 총 클릭 횟수를 저장한 변수값을 증가한다 
    * 돔 업데이트 함수 호출   

* ```
  git checkout -f 
  ```

##### DOM을 바꾸는 코드 테스팅 

* ```bash
  git checkout -f d249c72
  ```

##### 이벤트 처리기 동작 코드 테스팅

* 마크업에 할당문을 넣지 말고 모듈 스스로 타깃 요소의 클릭 처리기로 할당할 수 있게 만들자 

* ```bash
  git checkout -f 6d75e7b
  ```


### [실습1] BgColorSettingDisplay

* // todo

### [실습2] SidebarDisplay

* // todo

## 콜백 패턴 테스트 

### CardService

* // todo 

### LocalStorage

* // todo 

## XMLHttpRequest 테스트

### CardApi 

* // todo 

## 정리  

* TDD를 통해...
* BgColorSetting