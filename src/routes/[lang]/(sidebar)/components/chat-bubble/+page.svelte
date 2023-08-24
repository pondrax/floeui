<script context="module">
	export const heading = 'Display';
</script>

<script>
  import { fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives.js";
  import { i } from '@inlang/sdk-js';
	
	let properties = [
  { type:'component', attr: 'chat', desc: 'Container for one line of conversation and all its data' },
  { type:'modifier', attr: 'chat-start', desc: 'Aligns `chat` to left (required)' },
  { type:'modifier', attr: 'chat-end', desc: 'Aligns `chat` to end (required)' },
  { type:'component', attr: 'chat-image', desc: 'For the author image' },
  { type:'component', attr: 'chat-header', desc: 'For the line above the chat bubble' },
  { type:'component', attr: 'chat-footer', desc: 'For the line below the chat bubble' },
  { type:'component', attr: 'chat-bubble', desc: 'For the content of chat' },
  { type:'modifier', attr: 'chat-bubble-primary', desc: 'sets `primary` color for the `chat-bubble`' },
  { type:'modifier', attr: 'chat-bubble-secondary', desc: 'sets `secondary` color for the `chat-bubble`' },
  { type:'modifier', attr: 'chat-bubble-accent', desc: 'sets `accent` color for the `chat-bubble`' },
  { type:'modifier', attr: 'chat-bubble-info', desc: 'sets `info` color for the `chat-bubble`' },
  { type:'modifier', attr: 'chat-bubble-success', desc: 'sets `success` color for the `chat-bubble`' },
  { type:'modifier', attr: 'chat-bubble-warning', desc: 'sets `warning` color for the `chat-bubble`' },
  { type:'modifier', attr: 'chat-bubble-error', desc: 'sets `error` color for the `chat-bubble`' },
];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Chat Bubble</h2>
		<p p-3>{i('chat.desc')}</p>
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
    <h3 font-semibold cursor-pointer hover-text-primary>## Chat</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={`
<div class="chat chat-start">
  <div class="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
</div>
<div class="chat chat-end">
  <div class="chat-bubble">You underestimate my power!</div>
</div>`}
      />
    </div>
  </div>
</div>
