<h1>Todo list</h1>
<script>
   
	
   let newItem = '';
	
    let todoList = newItem
	
	function addToList() {
		todoList = [...todoList, {text: newItem, status: false}];
		newItem = '';
	}
	
	function removeFromList(index) {
		todoList.splice(index, 1)
		todoList = todoList;
    }
</script>
<div class="MidClass">
	<input bind:value={newItem} type="text" placeholder="new todo item..">
	
	<div class="buttonMidClass">
		<button class="addButton" on:click={addToList}>Add</button>
	</div>
	<div>
		<br/>
	{#each todoList as item, index}
		<input bind:checked={item.status} type="checkbox">
		<span class:checked={item.status}>{item.text}</span>
		<span on:click={() => removeFromList(index)}>❌</span>
		<br/>
	{/each} 
	</div>
	
</div>





<style> 
	.checked {
        text-decoration: line-through;
    }
	h1{
		text-align: center;
		background-color:rgba(0, 0, 0, 0.2);
		font-size: 50px;
		border-radius: 5px;
		color: rgb(88, 3, 54);
	}
	.MidClass{
		display: grid;
		justify-content: center;
	}
	.buttonMidClass{
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}
	.addButton{
		width: 5vw;
		height: 5vh;
		background-color: rgb(118, 2, 114);
		color: white;
	}
	.addButton:active{
		transform: translate(-5px, -5px);
	}
</style> 
