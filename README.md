# 프론트엔드 개발과 TDD 

## 1. 동기부여 

### 아리송한 상황 

* 클라이언트 측 자바스크립트를 다루는 것은 복잡함 
  * 서버쪽은 노드JS 버전을 마음대로 변경할 수 있다 
  * 클라이언트 쪽은 사용자가가 사용할 브라우져 버전을 강제할 수 없다 
* 자바스크립트 언어 자체의 특징 
  * console.log 함수가 매우 쉽게 덮어 쓰여질 수 있다 
  * 이것은 의도된 언어 스펙이지만 개발자들이 실수할 가능성이 높다 
* 타입
  * '1' + 1 = '11'
  * '2' * 3 = 6
  * 1 + '2' + 3 * 4 = '1212' 
* 이러한 문제를 극복하는 방법으로 테스트주도개발(TDD)을 알아보자 

## 2. 준비

### 자스민 프레임웍

* 자스민은 피보탈 랩스에서 만든 BDD(Behavior Driven Development) 프레임웍크로서 자동화된 단위 테스트 도구
* 단위 테스트(unit test)란 코드의 기능 단위(funtionality unit)를 테스트 하는 것을 말한다 
  * 무엇이 기능인가? 결정하기 쉽지 않음 
  * TDD를 다른 관점에서 바라본 BDD라는 해결책을 제시 
* BDD
  * 유저 스토리 개념을 끌어들인 테스트 작성법 
  * 예를 들어 어떤 버튼을 클릭하면 경고 창을 띄우는 유저 스토리를 생각해 보자 
    * Given: 초기 상황
    * When: 어떤 이벤트가 발생 
    * Then: 후속 결과를 기대 
  * ```js
    describe('어떤 버튼은', ()=> {
      describe('클릭했을 때', ()=> {
        it('경고창을 띄운다', ()=> {

        })
      })
    })
    ```
  * 테스트 단위를 스팩(spec)이라고 함
    * 자스민에서는 it 함수로 만든다 

### 설치 

* [getting_started](https://jasmine.github.io/pages/getting_started.html)
* 두 가지 설치 방법: 스탠드어론, 노드JS 
  * 스탠드어론으로 설치 하겠음 
* 러너
  * 자스민 코드와 소스 파일, 스펙을  파일을 참조하는 html 파일 
  * setting/index.html 파일 확인 
* 헬로월드 
  * `checkout` 

## 3. 프론트엔드 코드 테스트 

### 테스트할 수 없는 코드 

* 프론트엔드 코드 테스트는 비교적 어렵다. 테스트할 수 없게 작성했기 때문 

```html
<button onclick="counter++; countDisplay()">증가</button>
<span id="counter-display">0</span>

<script>
  var counter = 0;

  function countDisplay() {
    document.getElementById('counter-display').innerHTML = counter;
  }
</script>
```

* 이 코드의 문제는 
  * 관심사가 분리되지 않았음 
    * 클릭 이벤트 처리기를 인라인 형태로 정의한 점 
  * 재사용성이 떨어짐 
    * counter로 전역 공간을 어지럽힌 점 
    * 횟수를 표시하는 span id를 displayCout 함수에서 하드코딩한 점 

* 어떻게 하면 테스트할 수 있게 코딩할 수 있을까? 
  * UI에서 완전히 떼어놓고 코드를 모듈화 시키면 비즈니스 로직만 테스트할 수 있음
  * 자바스크립트를 별도로 빼내면 다른 곳에서도 재사용할수 있고 테스트성도 좋아짐
  * 카운터 예제로 프론트엔트 코드 테스트를 알아보겠다 

### 모듈 패턴 

// todo 

### 카운터 모듈

* 카운터에는 데이터가 있다. 이것을 다루는 ClickCounter 모듈을 먼저 만들자 
  * 전역 공간에 있는 counter를 ClickCounter 모듈에 캡슐화하여 관리하겠다 
* 스펙은 다음과 같다 
  * ClickCounter 모듈의
    * getCounter() 는 
      * 카운터 값을 반환한다
    * increase() 는
      * 카운터를 1 올린다
    * decrease() 는
      * 카운터를 1 내린다

### 카운트 뷰 모듈 

* 다음으로 돔 접근을 위해 ClickCountView 모듈을 만들자 
  * 클릭 이벤트 처리기와 횟수 표시하는 엘레멘트를 캡슐화하여 관리하겠다 
* 스펙은 다음과 같다
  * ClickCountView 모듈은 
    * 클릭 이벤트가 발생하면 increseAndUpdateView를 실행한다
    * increseAndUpdateView()는 
      * ClickCounter의 increase 함수를 실행한다
      * updateView 함수를 실행한다
      * updateEl의 텍스트를 설정한다
    * updateView()는 
      * 클릭한적이 없으면 "0"을 출력한다

* ClickCountView 모듈 로직 코드 테스팅
  * 버튼 클릭 이벤트 처리기의 역할
    * 총 클릭 횟수를 저장한 변수값을 증가한다 
    * 돔 업데이트 함수 호출   
* DOM을 바꾸는 코드 테스팅 
* 이벤트 처리기 동작 코드 테스팅
  * 마크업에 할당문을 넣지 말고 모듈 스스로 타깃 요소의 클릭 처리기로 할당할 수 있게 만들자 

### 테스트 용이한 코드를 작성하려면 

* 데이터와 뷰를 분리하여 생각한다 
* 화면을 컴포넌트 단위로 생각한다 
* 뷰는 돔을 캡슐화 해야한다 

### 지금가지 사용한 자시민 api 정리 

// todo 


## 4. [실습1] BgColorSettingDisplay

* // todo

## 5. [실습2] SidebarDisplay

* // todo

## 정리  

* TDD를 통해...
* BgColorSetting

## 참고 자료

* 자바스크립트 패턴과 테스트 (도서, 래리 스펜서, 세스 리쳐즈 지음, 이일웅 길벗)
* Jasmine 자바스크립트 테스팅 (도서, 파울로 라고나 지음, 이일웅 옮김, 에이콘)