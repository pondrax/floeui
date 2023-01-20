<script lang="ts">
  import { browser } from "$app/environment";
  import { fnCalendar, fnCopy, fnPrism, fnRef, fnTab } from "$lib/directives";
  import dayjs from "dayjs";

  if (browser) {
    // @ts-ignore
    window.dayjs = dayjs;
  }
  let currentDate = dayjs();

  $: daysBeforeMonth = Array.from(
    { length: currentDate.startOf("month").day() },
    (_, i) => ({
      date: currentDate.endOf("month").date(-i),
      disabled: true,
      current: false,
    })
  ).reverse();
  $: daysInMonth = Array.from(
    { length: currentDate.daysInMonth() },
    (_, i) => ({
      date: currentDate.startOf("month").date(i + 1),
      current: currentDate.isSame(
        currentDate.startOf("month").date(i + 1),
        "day"
      ),
      disabled: false,
    })
  );
  $: daysAfterMonth = Array.from(
    { length: 6 - currentDate.endOf("month").day() },
    (_, i) => ({
      date: currentDate
        .add(1, "month")
        // .startOf("month")
        .date(i + 1),
      disabled: true,
      current: false,
    })
  );

  $: days = daysBeforeMonth.concat(daysInMonth).concat(daysAfterMonth);
  // $: console.log(days)
</script>

<!-- <div calendar-title flex>
  <div btn="~ xs"><</div>
  <div w-full >January</div>
  <div btn="~ xs">></div>
</div> -->
<div flex flex-col gap-5>
  <div>
    <h2 text-xl cursor-pointer hover:text-primary># Calendar</h2>
  </div>
  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Calendar</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview>
        <div calendar>
          <ul calendar-title>
            <li col-span-5 text-left px-2>
              {currentDate.format("YYYY-MM-DD")}
            </li>
            <li>
              <button
                btn="~ sm"
                on:click={() =>
                  (currentDate = currentDate.subtract(1, "month"))}>&lt;</button
              >
            </li>
            <li>
              <button
                btn="~ sm"
                on:click={() => (currentDate = currentDate.add(1, "month"))}
                >&gt;</button
              >
            </li>
            <li>su</li>
            <li>mo</li>
            <li>tu</li>
            <li>we</li>
            <li>th</li>
            <li>fr</li>
            <li>sa</li>
          </ul>
          <ul calendar-days>
            {#each days as day}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <li class:active={day.current} class:disabled={day.disabled} on:click={()=>currentDate = day.date}>
                {day.date?.format("D")}
                <!-- {day.date?.format("MM-DD")} -->
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <!-- use:fnRef={"[data-code]"} /> -->
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div calendar>
  <ul calendar-title>
    <li col-span-5 text-left px-2>January</li>
    <li><button btn="~ sm"><</button></li>
    <li><button btn="~ sm">></button></li>
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
</div>`}/>
    </div>
  </div>

  <div>
    <h3 font-semibold cursor-pointer hover:text-primary>## Calendar</h3>
    <div use:fnTab use:fnCopy={"[data-code]"}>
      <div data-title="Preview" demo-preview use:fnRef={"[data-code]"} />
      <!-- prettier-ignore -->
      <div data-title="Code" demo-code use:fnPrism={
`<div calendar>
  <ul calendar-title>
    <li col-span-5 text-left px-2>January</li>
    <li><button btn="~ sm"><</button></li>
    <li><button btn="~ sm">></button></li>
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
</div>
