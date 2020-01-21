<script>

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
    color: red;
  }

  .secondButton {
    color: green;
  }

  .mainUL {
    .first {
      color: $redColor;
    }
    .second {
      color: $aquaColor;
      @mixin typicalBorder;
    }
    .third {
      color: $brownColor;
    }
  }
</style>

<button class="firstButton">Первая Кнопка</button>
<button class="secondButton">Вторая Кнопка</button>
<ul class="mainUL">
  zxczxc
  <li class="first">какой-то текст</li>
  <li class="second">какой-то текст</li>
  <li class="third">какой-то текст</li>
</ul>
