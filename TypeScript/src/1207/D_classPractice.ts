{
// 도형 계산 클래스

// Car 클래스 생성
// 클래스는 model과 year 두 개의 멤버 변수
// 매개변수로 두 개의 멤버 변수를 받는 생성자 생성
// getModelAndYear라는 메소드 포함
// "This car is a {model} from {year}."를 출력

class Car {
  // public model: string;
  // public year: number;

  constructor(public model: string, public year: number) {
    this.model = model;
    this.year = year;
  }

  getModeAndYear() {
    console.log(`This car is a ${this.model} from ${this.year}.`);
  }
}

//?
// 위의 Car 클래스로부터 car1 인스턴스를 생성
// model은 "Telsa Model 3", year는 2023로 설정하세요.

// car1 인스턴스의 getModelAndYear 메소드 호출

const car1 = new Car('Telsa Model 3', 2023)
car1.getModeAndYear();



}