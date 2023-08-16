<script context="module">
	export const heading = 'Display';
</script>

<script>
	import { fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives/index.js';
  import { i } from '@inlang/sdk-js';
	
	let properties = [
  { type:'component', attr: 'carousel', desc: 'Container element' },
  { type:'component', attr: 'carousel-item', desc: 'Carousel item' },
  { type:'modifier', attr: 'carousel-center', desc: 'Snap elements to center' },
  { type:'modifier', attr: 'carousel-end', desc: 'Snap elements to end' },
  { type:'modifier', attr: 'carousel-vertical', desc: 'Vertical carousel' },
];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Carousel</h2>
		<p p-3>{i('carousel.desc')}</p>
	</div>

	<div bg-base rounded-xl p-2 mx-3>
		<div max-h-100 overflow-auto>
			<table table table-rounded w-full>
				<thead>
					<tr bg-base-b sticky top-0>
						<th w-48>
							<input input placeholder={i('search')} />
						</th>
						<th>{i('type')}</th>
						<th>{i('desc')}</th>
					</tr>
				</thead>
				<tbody>
					{#each properties as { type, attr, desc }}
						<tr>
							<td>{attr}</td>
							<td>
								<span badge class:badge-primary={type == 'component'}>{type}</span>
							</td>
							<td>{desc}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
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
