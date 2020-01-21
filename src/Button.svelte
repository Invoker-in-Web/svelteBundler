<script>
  const props = {
    id: 1251243,
    phone: "8-999-555-44-22",
    address: "Earth",
    street: "Broken Lamps",
    home: 666
  };
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

<style>
  $aquaColor: aqua;
  $redColor: red;
  $brownColor: brown;
  $borderWidth: 5px;
  $borderType: solid;
  $borderColor: blue;

  @define-mixin typicalBorder {
    border: $borderWidth $borderType $borderColor;
  }

  .firstButton {
    display: flex;
    justify-content: center;
    color: red;
  }

  .secondButton {
    color: green;
    justify-content: center;
  }

  .mainUL {
    .first {
      color: $redColor;
    }
    .second {
      color: $aquaColor;
    }
    .third {
      color: $brownColor;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
  }

  .wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }
  .firstField,
  .secondField {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
  }

  .customP {
    @mixin typicalBorder;
  }
</style>

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
