<script>
  import Preview from "$components/preview.svelte";
</script>

<Preview
  title="Dropdown menu using <details> tag"
  code={`<details class="dropdown">
  <summary class="btn m-1">open or close</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
>
  <div>
    Stays open until gets clicked again. Or you can close it using JS by
    removing the `open` attribute
  </div>
</Preview>

<Preview
  title="Dropdown menu"
  code={`<details class="dropdown">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown bottom (default)"
  code={`<details class="dropdown">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown bottom aligns to end"
  code={`<details class="dropdown dropdown-end">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown top"
  code={`<details class="dropdown dropdown-top">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown top aligns to end"
  code={`<details class="dropdown dropdown-top dropdown-end">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown left"
  code={`<details class="dropdown dropdown-left">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown left aligns to end"
  code={`<details class="dropdown dropdown-left dropdown-end">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown right"
  code={`<details class="dropdown dropdown-right">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown right aligns to end"
  code={`<details class="dropdown dropdown-right dropdown-end">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown on hover"
  code={`<details class="dropdown dropdown-hover">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Dropdown force open"
  code={`<details class="dropdown dropdown-open">
  <summary class="btn m-1">click to open</summary>
  <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>`}
/>

<Preview
  title="Card as dropdown"
  code={`<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Click</div>
  <div
    tabindex="0"
    class="dropdown-content card card-compact bg-primary text-primary-content z-1 w-64 p-2 shadow">
    <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>`}
/>

<Preview
  title="Dropdown in navbar"
  code={`<div class="navbar bg-base-300 rounded-box">
  <div class="flex-1 px-2 lg-flex-none">
    <a class="text-lg font-bold">daisyUI</a>
  </div>
  <div class="flex flex-1 justify-end px-2">
    <div class="flex items-stretch">
      <a class="btn btn-ghost rounded-btn">Button</a>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Dropdown</div>
        <ul
          tabindex="0"
          class="menu dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>`}
/>
