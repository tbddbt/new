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