// import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as StartFuncUpdateRow } from '../../kLowDb/WriteFile/Update/UpdateRow/EntryFile.js';
import { StartFunc as StartFuncUpdateRowValue } from '../../kLowDb/WriteFile/Update/UpdateRowValue/EntryFile.js';

let PutFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateRow({ inDataToUpdate, inId });
};
let PutToValueFunc = ({ inDataToUpdate, inId }) => {
    return StartFuncUpdateRowValue({ inDataToUpdate, inId });
};

export {
    PutFunc,PutToValueFunc
};