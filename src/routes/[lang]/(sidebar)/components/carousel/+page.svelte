<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives/index.js';
</script>

<div flex flex-col gap-5>
	<div>
		<h2 text-xl cursor-pointer hover-text-primary># Carousel</h2>
	</div>
	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Carousel</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={`
<div carousel w-full rounded-box>
  <div id="item1">
    <img src="https://picsum.photos/600/300" />
  </div> 
  <div id="item2">
    <img src="https://picsum.photos/600/300"/>
  </div> 
  <div id="item3">
    <img src="https://picsum.photos/600/300"/>
  </div> 
  <div id="item4">
    <img src="https://picsum.photos/600/300"/>
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>`}
      />
		</div>
	</div>
</div>
