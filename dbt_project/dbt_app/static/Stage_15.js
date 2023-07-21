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