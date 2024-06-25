<script>
  import Preview from "$components/preview.svelte";
</script>

<Preview
  title="Button"
  code={`<button class="btn">Button</button>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>`}
/>

<Preview
  title="Buttons with brand colors"
  code={`<button class="btn">Button</button>
<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-link">Link</button>`}
/>

<Preview
  title="Active buttons"
  code={`<button class="btn btn-active">Default</button>
<button class="btn btn-active btn-neutral">Neutral</button>
<button class="btn btn-active btn-primary">Primary</button>
<button class="btn btn-active btn-secondary">Secondary</button>
<button class="btn btn-active btn-accent">Accent</button>
<button class="btn btn-active btn-ghost">Ghost</button>
<button class="btn btn-active btn-link">Link</button>`}
/>

<Preview
  title="Buttons with state colors"
  code={`<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>`}
/>

<Preview
  title="Outline buttons"
  code={`<button class="btn btn-outline">Default</button>
<button class="btn btn-outline btn-primary">Primary</button>
<button class="btn btn-outline btn-secondary">Secondary</button>
<button class="btn btn-outline btn-accent">Accent</button>`}
/>

<Preview
  title="Outline buttons with state colors"
  code={`<button class="btn btn-outline btn-info">Info</button>
<button class="btn btn-outline btn-warning">Warning</button>
<button class="btn btn-outline btn-error">Error</button>`}
/>

<Preview
  title="Button sizes"
  code={`<button class="btn btn-lg">Large</button>
<button class="btn">Normal</button>
<button class="btn btn-sm">Small</button>
<button class="btn btn-xs">Tiny</button>`}
/>

<Preview
  title="Responsive button"
  code={`<button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>`}
/>

<Preview
  title="Wide button"
  code={`<button class="btn btn-wide">Wide</button>`}
/>

<Preview
  title="Glass button"
  code={`<button class="btn glass">Glass button</button>`}
  background="!bg-[url(https://picsum.photos/1200/200)]"
/>

<Preview
  title="Buttons with different HTML tags"
  code={`<a role="button" class="btn">Link</a>
<button type="submit" class="btn">Button</button>
<input type="button" value="Input" class="btn" />
<input type="submit" value="Submit" class="btn" />
<input type="radio" aria-label="Radio" class="btn" />
<input type="checkbox" aria-label="Checkbox" class="btn" />
<input type="reset" value="Reset" class="btn" />`}
>
  <div class="text-xs bg-base-200 inline">
    {`You can use 'btn' class on <button>, <input>, <a>, etc...`}
  </div>
</Preview>

<Preview
  title="Disabled button"
  code={`<button class="btn" disabled="disabled">Disabled using attribute</button>
<button class="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true">
  Disabled using class name
</button>`}
/>

<Preview
  title="Button square"
  code={`<button class="btn btn-square">
  <i class="i-carbon-close text-3xl"></i>
</button>
<button class="btn btn-square btn-outline">
  <i class="i-carbon-close text-3xl"></i>
</button>`}
/>

<Preview
  title="Button circle"
  code={`<button class="btn btn-circle">
  <i class="i-carbon-close text-3xl"></i>
</button>
<button class="btn btn-circle btn-outline">
  <i class="i-carbon-close text-3xl"></i>
</button>`}
/>

<Preview
  title="Icon at start"
  code={`<button class="btn">
  <i class="i-carbon-favorite text-3xl"></i>
  Button
</button>`}
/>

<Preview
  title="Icon at end"
  code={`<button class="btn">
  Button
  <i class="i-carbon-favorite text-3xl"></i>
</button>`}
/>
<Preview
  title="Button block"
  code={`<button class="btn btn-block">
  Button Block
</button>`}
/>


<Preview
  title="Button with loading spinner"
  code={`<button class="btn btn-circle">
  <span class="loading loading-spinner"></span>
</button>
<button class="btn">
  <span class="loading loading-spinner"></span>
  loading
</button>`}
/>
