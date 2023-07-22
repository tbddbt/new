function getColumnFormat_Raw_1() {         
    var columns;
    
        columns = [
            {readOnly: true },{},{},
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{type: 'date',},{},{type: 'date',},
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: percentageValidator},
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: percentageValidator},
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
            {},{type: 'date',},
            {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{type: 'checkbox'}
        ];
        return columns;
     }  
             
   
function getColumnFormat_Raw_2() {         
    var columns;    
        columns = [
        {readOnly: false },
        {},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator, allowInvalid: false},
        {type: 'date',},
        {},
        {type: 'date',},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: percentageValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
        {type: 'dropdown',source: ['language', 'ide','a','b','c','d','r']},
        {type: 'date',},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {},
        {type: 'checkbox'},
        ];
        return columns;
     } 
     
function getColumnFormat_Ingredient_1() {         
    var columns;
    
        columns = [
        {readOnly: true },{},{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{type: 'date',},{},{},{},{type: 'date',},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: percentageValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: percentageValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: percentageValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
        {type: 'date',},{},{},{},{},{type: 'date',},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Ingredient_2() {         
    var columns;
    
        columns = [
        {readOnly: true },{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{type: 'date',},{},{type: 'date',},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator},{},{type: 'date',},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{type: 'checkbox'},
        ];
        return columns;
     }  

function getColumnFormat_Ingredient_3() {         
    var columns;
    
        columns = [
        {readOnly: true },{},{},{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{type: 'date',},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveIntegerValidator },{},{type: 'date',},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Materials() {         
    var columns;
    
        columns = [
        {readOnly: true },{},{},
        {type: 'numeric',},{},{type: 'date',},{},{type: 'date',},
        {type: 'numeric',},{},{type: 'date',},
        {type: 'numeric',},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_1(sheets) {
    var columns;
    var material_list=sheets['Materials']['sheet_data']
    console.log(material_list)
  
    columns = [
      {readOnly: true },
      {type: 'date', readOnly: true },
      {readOnly: true },
      {readOnly: true },
      {readOnly: true },
      {},
      {
        
        type: "dropdown",
        source: material_list
        
      },{},{},{type: 'date',},{},{},{},{},{type: 'date',},{},{type: 'date',},{},{},{type: 'date',},
      {
        type: 'dropdown', 
        source: ['Accept','Reject'],
      },{},{type: 'checkbox'},
    ];
    return columns;
  }


function getColumnFormat_Stage_2() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        { 
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],
        },
        {},{},{},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},
        {},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_3() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'], },{type: 'date',},{},{},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},
        {},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_4() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'], },
        {type: 'date',},{},{},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},
        {},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_5() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],},
        {type: 'date',},{},{},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],
        },{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_6() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],},
        {type: 'date',},{},{},{},{},{},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},
        {},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_7() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],},
        {},{},{},{},{type: 'date',},{},{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_8() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],},
        {},{},{type: 'date',},{},{},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_9() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'], },
        {readOnly: true },
        {readOnly: true },{type: 'date',},{},{},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_10() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],},
        {readOnly: true },
        {type: 'date',},{},{},{},{},{type: 'date',},
        {   
            type: 'dropdown', 
            source: ['Accept','Reject'],},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_11() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'], },
        {readOnly: true },{type: 'date',},{},{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{},{type: 'date',},
        {   
            type: 'dropdown', 
            source: ['Accept','Reject'],},
        {},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_12() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],},
        {readOnly: true },{type: 'date',},{},{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{},{type: 'date',},
        { 
            type: 'dropdown', 
            source: ['Accept','Reject'],},
        {},{},{type: 'checkbox'},
        ];
        return columns;
     } 
function getColumnFormat_Stage_13() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {   
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],},
        {readOnly: true },{type: 'date',},{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{type: 'date',},{},{},{},{type: 'date',},
        {   
            type: 'dropdown', 
            source: ['Accept','Reject'],},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_14() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {   
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'], },
        {readOnly: true },{type: 'date',},{},{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{},{type: 'date',},
        {   
            type: 'dropdown', 
            source: ['Accept','Reject'],},{},{type: 'checkbox'},
        ];
        return columns;
     } 

function getColumnFormat_Stage_15() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {   
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'], },
        {readOnly: true },{type: 'date',},{},{},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},
        {type: 'numeric', numericFormat: { pattern: '0' }, validator: positiveNumberValidator},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},{},{type: 'checkbox'}
        ];
        return columns;
     } 

function getColumnFormat_Stage_16() {         
    var columns;
    
        columns = [
        {readOnly: true },{type: 'date',readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },{readOnly: true },
        {
            type: 'dropdown', 
            source: ['Option 1', 'Option 2', 'Option 3'],},
        {readOnly: true },
        {},{type: 'date',},{},{},{},{},{type: 'date',},{},{type: 'date',},{},{},{type: 'date',},
        {
            type: 'dropdown', 
            source: ['Accept','Reject'],},{},{type: 'checkbox'},
        ];
        return columns;
     } 