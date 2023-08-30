// console.log(`Phone.js connected successfully.`)

const getPhoneData = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    // console.log(phones.length)
    // Step 01
    const phonesContainer = document.getElementById('phonesContainer');
    // Clear phone container phone card every time search button click

    phonesContainer.textContent = '';
    
    // display show all button if there are more than 12 phones in the search 

    const showAll = document.getElementById('showAll');
    
    if(phones.length > 12 && !isShowAll){
        showAll.classList.remove('hidden');
    }
    else {
        showAll.classList.add('hidden');
    }

    console.log(`is show all, ${isShowAll}`)
    // display first 12 phones if not clicked show all button

    if (!isShowAll){

        phones = phones.slice(0,12);
    }

    phones.forEach(phone => {
        // console.log(phone);
        // Step 02
        const phoneCard = document.createElement('div');
        phoneCard.classList = `rounded-lg shadow-xl my-6 pb-5 mx-5`;
        // Step 03
        phoneCard.innerHTML = `
        <div class="bg-sky-50 w-3/4 p-6 mx-auto mt-8 rounded-lg mb-6">
        <img class="p-12" src="${phone.image}" alt="iphone5s">
        </div>
        <div class="text-center space-y-5 mb-6">
        <h1 class="text-2xl font-bold text-[#403F3F]">${phone.phone_name}</h1>
        <p>There are many variations of <br> passages of available, but the <br> majority have suffered</p>
        <h1 class="text-2xl font-bold text-[#403F3F]">$599</h1>
        <button class="bg-[#0D6EFD] rounded-md font-bold text-white px-5 lg:px-10 py-3 my-8">Show Details</button>
        </div>
        `
        // Step 04
        phonesContainer.appendChild(phoneCard);
    })

    toggleLoadingSpinner(false);
}

// product search handler 

const searchProduct = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value; 
    // console.log(searchText);
    getPhoneData(searchText, isShowAll);
}

// Loading spinner function

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loadingSpinner');
    if (isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

// Handle show all button

const handleShowAll = () => {
    // console.log(`Show all button clicked by you.`)
    searchProduct(true);

}

// getPhoneData();