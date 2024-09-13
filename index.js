
function Reading(Number) {
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const secondTen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
         if (Number === 0) {
             return 'zero';
        }
  
        const Letters = Number.toString();
  
        if (Number < 10) {
            return units[Number];
        } 

        else  
            
            if (Number >= 11 && Number <= 19) {
                 return secondTen[Number - 11];
            } 

        else 
        
            if (Number < 100) {
                 const ten = tens[Math.floor(Number / 10)];
                 const one = units[Number % 10];
                return `${ten} ${one}`.trim();
            } 
            
            else 
            
            if (Number < 1000) {
                const hundred = units[Math.floor(Number / 100)];
                const remainder = Reading(Number % 100);
                return `${hundred} hundred ${remainder}`.trim();
            } 
  }

  