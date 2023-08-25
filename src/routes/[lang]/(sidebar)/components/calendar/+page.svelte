<script context="module">
	export const heading = 'Display';
	export const action = 'fnCalendar';
</script>

<script>
	import { browser } from '$lib/utils.js';
	import { fnCalendar, fnCopy, fnPrism, fnRef, fnTab } from '$lib/directives.js';
	import dayjs from 'dayjs';

	if (browser) {
		// @ts-ignore
		window.dayjs = dayjs;
	}
	let currentDate = dayjs();

	$: daysBeforeMonth = Array.from({ length: currentDate.startOf('month').day() }, (_, i) => ({
		date: currentDate.endOf('month').date(-i),
		disabled: true,
		current: false
	})).reverse();
	$: daysInMonth = Array.from({ length: currentDate.daysInMonth() }, (_, i) => ({
		date: currentDate.startOf('month').date(i + 1),
		current: currentDate.isSame(currentDate.startOf('month').date(i + 1), 'day'),
		disabled: false
	}));
	$: daysAfterMonth = Array.from({ length: 6 - currentDate.endOf('month').day() }, (_, i) => ({
		date: currentDate
			.add(1, 'month')
			// .startOf("month")
			.date(i + 1),
		disabled: true,
		current: false
	}));

	$: days = daysBeforeMonth.concat(daysInMonth).concat(daysAfterMonth);
  import { t } from '$lib/lang.js'
	
	let properties = [
		{ type: 'component', attr: 'calendar', desc: 'Container element' },
		{ type: 'component', attr: 'calendar-title', desc: 'Title element' },
		{ type: 'component', attr: 'calendar-days', desc: 'Container for day' },
		{ type: 'modifier', attr: 'collapse-arrow', desc: 'Adds arrow icon' },
		{ type: 'modifier', attr: 'collapse-plus', desc: 'Adds plus/minus icon' },
		{ type: 'modifier', attr: 'collapse-open', desc: 'Force open' },
		{ type: 'modifier', attr: 'collapse-close', desc: 'Force close' }
	];
</script>

<div flex flex-col gap-10 py-48>
	<div>
		<h2 text-3xl cursor-pointer hover-text-primary font-bold pb-3># Calendar</h2>
		<p p-3>{$t('calendar.desc')}</p>
	</div>

	<div bg-base rounded-xl p-2 mx-3>
		<div max-h-100 overflow-auto>
			<table table table-rounded w-full>
				<thead>
					<tr bg-base-b sticky top-0>
						<th w-48>
							<input input placeholder={$t('search')} />
						</th>
						<th>{$t('type')}</th>
						<th>{$t('desc')}</th>
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
		<h3 font-semibold cursor-pointer hover-text-primary>## Calendar</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview>
				<div calendar calendar-xl>
					<div calendar-title>
						<div col-span-5 text-left px-2>
							{currentDate.format('YYYY-MM-DD')}
						</div>
						<div>
							<button btn="~ sm" on:click={() => (currentDate = currentDate.subtract(1, 'month'))}
								>&lt;</button
							>
						</div>
						<div>
							<button btn="~ sm" on:click={() => (currentDate = currentDate.add(1, 'month'))}
								>&gt;</button
							>
						</div>
					</div>
					<div calendar-title>
						<div>su</div>
						<div>mo</div>
						<div>tu</div>
						<div>we</div>
						<div>th</div>
						<div>fr</div>
						<div>sa</div>
					</div>
					<div calendar-days>
						{#each days as day}
							<div
								tabindex="0"
								role="button"
								class:border-primary={day.current}
								class:disabled={day.disabled}
								on:click={() => (currentDate = day.date)}
								on:keydown
							>
								{day.date?.format('D')}
								<!-- {day.date?.format("MM-DD")} -->
							</div>
						{/each}
						<div class="!row-start-2 !col-start-5 col-span-3 bg-pink:50 pointer-events-none">
							test
						</div>
					</div>
				</div>
			</div>

			<div
				data-title="Code"
				demo-code
				use:fnPrism={`<div calendar>
  <ul calendar-title>
    <li col-span-5 text-left px-2>January</li>
    <li><button btn="~ sm">&lt;</button></li>
    <li><button btn="~ sm">&gt;</button></li>
    <li>su</li>
    <li>mo</li>
    <li>tu</li>
    <li>we</li>
    <li>th</li>
    <li>fr</li>
    <li>sa</li>
  </ul>
  <ul calendar-list>
    <li>1</li>
    <li>2</li>
    <li active>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
    <li disabled>1</li>
    <li disabled>2</li>
    <li disabled>3</li>
    <li disabled>4</li>
    <li !col-start-2 row-start-2>coba</li>
  </ul>
</div>`}
			/>
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>## Calendar</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview use:fnRef={'[data-code]'} />
			<!-- prettier-ignore -->
			<div data-title="Code" demo-code use:fnPrism={
`<div calendar>
  <ul calendar-title>
    <li col-span-5 text-left px-2>January</li>
    <li><button btn="~ sm">&lt;</button></li>
    <li><button btn="~ sm">&gt;</button></li>
    <li>su</li>
    <li>mo</li>
    <li>tu</li>
    <li>we</li>
    <li>th</li>
    <li>fr</li>
    <li>sa</li>
  </ul>
  <ul calendar-days>
    <li>1</li>
    <li>2</li>
    <li active>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
    <li disabled>1</li>
    <li disabled>2</li>
    <li disabled>3</li>
    <li disabled>4</li>
    <li disabled>5</li>
    <li disabled>6</li>
    <li disabled>7</li>
    <li disabled>8</li>
    <li disabled>9</li>
    <li disabled>10</li>
    <li disabled>11</li>
  </ul>
</div>`}/>
		</div>
	</div>

	<div>
		<h3 font-semibold cursor-pointer hover-text-primary>
			## Calendar 
			<span badge="~ success">{$t("fn.usage")}</span>
		</h3>
		<div use:fnTab use:fnCopy={'[data-code]'}>
			<div data-title="Preview" demo-preview>
				<div use:fnCalendar></div>
			</div>
			<div data-title="Code" demo-code use:fnPrism={
`(script)
	import { fnCalendar } from 'floeui/directives'
(/script)

<div use:fnCalendar></div>`}/>
		</div>
	</div>
</div>
