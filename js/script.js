const bill = document.querySelector('.bill');
const percent_5 = document.querySelector('#percent_5');
const percent_10 = document.querySelector('#percent_10');
const percent_15 = document.querySelector('#percent_15');
const percent_25 = document.querySelector('#percent_25');
const percent_50 = document.querySelector('#percent_50');
const custom_tip = document.querySelector('.custom');
const people = document.querySelector('.people');

const tip_output = document.querySelector('.tip-output');
const total_output = document.querySelector('.total-output');

const reset_btn = document.querySelector('.reset-btn');
// disable reset button
reset_btn.disabled = true;

// bill
percent_5.addEventListener("click",  (e)=> {
    e.preventDefault();
    if (bill.value == ''){
        // bill.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else if(people.value == ''){
        people.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else{
        // calculate the bill person
        bill_per_person = parseInt(bill.value)/ parseInt(people.value);
    
        // calculate tip amount per person
        percentage = parseFloat(percent_5.value) / 100;
        
        tip_amt = parseFloat(bill_per_person) * parseFloat(percentage);
        
        // calculate total amount per person
        total_amt_per_person = parseFloat(bill_per_person) + parseFloat(tip_amt);

        // display results
        tip_output.innerHTML = tip_amt.toFixed(2);

        total_output.innerHTML = total_amt_per_person.toFixed(2);

        // enable reset button
        reset_btn.disabled = false;
    }
});

percent_10.addEventListener("click",  (e)=> {
    e.preventDefault();
    if (bill.value == ''){
        // bill.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else if(people.value == ''){
        people.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else{
        // calculate the bill person
        bill_per_person = parseInt(bill.value)/ parseInt(people.value);
    
        // calculate tip amount per person
        percentage = parseFloat(percent_10.value) / 100;
        
        tip_amt = parseFloat(bill_per_person) * parseFloat(percentage);
        
        // calculate total amount per person
        total_amt_per_person = parseFloat(bill_per_person) + parseFloat(tip_amt);

        // display results
        tip_output.innerHTML = tip_amt.toFixed(2);

        total_output.innerHTML = total_amt_per_person.toFixed(2);

        // enable reset button
        reset_btn.disabled = false;

    }
});

percent_15.addEventListener("click",  (e)=> {
    e.preventDefault();
    if (bill.value == ''){
        // bill.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else if(people.value == ''){
        people.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else{
        // calculate the bill person
        bill_per_person = parseInt(bill.value)/ parseInt(people.value);
    
        // calculate tip amount per person
        percentage = parseFloat(percent_15.value) / 100;
        
        tip_amt = parseFloat(bill_per_person) * parseFloat(percentage);
        
        // calculate total amount per person
        total_amt_per_person = parseFloat(bill_per_person) + parseFloat(tip_amt);

        // display results
        tip_output.innerHTML = tip_amt.toFixed(2);

        total_output.innerHTML = total_amt_per_person.toFixed(2);

        // enable reset button
        reset_btn.disabled = false;
    }
});

percent_25.addEventListener("click",  (e)=> {
    e.preventDefault();
    if (bill.value == ''){
        // bill.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else if(people.value == ''){
        people.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else{
        // calculate the bill person
        bill_per_person = parseInt(bill.value)/ parseInt(people.value);
    
        // calculate tip amount per person
        percentage = parseFloat(percent_25.value) / 100;
        
        tip_amt = parseFloat(bill_per_person) * parseFloat(percentage);
        
        // calculate total amount per person
        total_amt_per_person = parseFloat(bill_per_person) + parseFloat(tip_amt);

        // display results
        tip_output.innerHTML = tip_amt.toFixed(2);

        total_output.innerHTML = total_amt_per_person.toFixed(2);

        // enable reset button
        reset_btn.disabled = false;

    }
});

percent_50.addEventListener("click",  (e)=> {
    e.preventDefault();
    if (bill.value == ''){
        // bill.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else if(people.value == ''){
        people.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else{
        // calculate the bill person
        bill_per_person = parseInt(bill.value)/ parseInt(people.value);
    
        // calculate tip amount per person
        percentage = parseFloat(percent_50.value) / 100;
        
        tip_amt = parseFloat(bill_per_person) * parseFloat(percentage);
        
        // calculate total amount per person
        total_amt_per_person = parseFloat(bill_per_person) + parseFloat(tip_amt);

        // display results
        tip_output.innerHTML = tip_amt.toFixed(2);

        total_output.innerHTML = total_amt_per_person.toFixed(2);

        // enable reset button
        reset_btn.disabled = false;
    }
});

// custom input
custom_tip.addEventListener("input", ()=>{
    customInput();
});

function customInput() {
    if (bill.value == ''){
        bill.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else if(people.value == ''){
        people.style.border = "1px solid #ff5252";
        document.getElementById('error_msg').innerHTML ="Can't be zero";
    }else{
        // calculate the bill person
        bill_per_person = parseInt(bill.value)/ parseInt(people.value);
    
        // calculate tip amount per person
        percentage = parseFloat(custom_tip.value) / 100;
        
        tip_amt = parseFloat(bill_per_person) * parseFloat(percentage);
        
        // calculate total amount per person
        total_amt_per_person = parseFloat(bill_per_person) + parseFloat(tip_amt);

        // display results
        tip_output.innerHTML = tip_amt.toFixed(2);

        total_output.innerHTML = total_amt_per_person.toFixed(2);

        // enable reset button
        reset_btn.disabled = false;

    }
}

// reset btn

reset_btn.addEventListener("click", (e)=>{
    e.preventDefault();

    tip_output.innerHTML = "$0.00";
    total_output.innerHTML = "$0.00";
});