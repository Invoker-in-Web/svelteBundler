<script lang="typescript">
  const props = {
    obj: {
      firstProperty: null
    },
    id: 1251243,
    phone: "8-999-555-44-22",
    address: "Earth",
    street: "Broken Lamps",
    home: 666
  };

console.log(props.obj?.firstProperty ?? 'что-то вместо null');

function svelteTS(person: string) {
    return "Hello, " + person;
}

let TSuser = "svelte___TS USER";

document.body.textContent = svelteTS(TSuser);

  console.log(
    "class Abc constructor name",
    new (class Abc {})().constructor.name
  );

  const getString = (param1 = true) =>
    param1 ? "got trusy param" : "got falsy param";
  const resultzzzz = getString();
  console.log(resultzzzz);

  function firstButtonHandle() {
    const dummyText = "FirstText";
    document.getElementsByClassName("customTextarea")[0].append(dummyText);
    document.getElementsByClassName("customTextarea").id = props.id;
    document.getElementsByClassName("customTextarea").phone = props.phone;
    document.getElementsByClassName("customTextarea").address = props.address;
  }

  function secondButtonHandle() {
    const dummyText = "SecondText";
    document.getElementsByClassName("customP")[0].append(dummyText);
    document.getElementsByClassName("customP").street = props.street;
    document.getElementsByClassName("customP").home = props.home;
  }
</script>

<div class="wrapper">
  <div class="firstField">
    <button class="firstButton" on:click={firstButtonHandle}>
      Первая Кнопка
    </button>
    <textarea class="customTextarea" cols="30" rows="10" />
  </div>
  <div class="secondField">
    <button class="secondButton" on:click={secondButtonHandle}>
      Вторая Кнопка
    </button>
    <p class="customP" />
  </div>
</div>

<ul class="mainUL">
  zxczxc
  <li class="first">какой-то текст</li>
  <li class="second">какой-то текст</li>
  <li class="third">какой-то текст</li>
</ul>

<style>
$aquaColor: aqua;
$borderSize: 5px;
$borderType: solid;
$borderColor: blue;

@define-mixin typicalBorder{
  border: $borderSize $borderType $borderColor
}

ul{

.first{
  display: flex;
  color: $aquaColor;
  @mixin typicalBorder;
}

}

</style>