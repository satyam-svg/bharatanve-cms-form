import { React, useState, useEffect } from "react";
import "./Question_form.css";
import CropOriginalIcons from "@material-ui/icons/CropOriginal";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { BsTrash } from "react-icons/bs";
import { IconButton, Typography } from "@material-ui/core";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import TextFieldIcon from "@material-ui/icons/TextFields";
import { BsFileText } from "react-icons/bs";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import { FcRightUp } from "react-icons/fc";
import CloseIcon from "@material-ui/icons/Close";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';


function Question_form() {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which is the capital city of karnatka?",
      questionType: "radio",
      options: [
        { optionText: "Bengalaru" },
        { optionText: "Belgavi" },
        { optionText: "Hubli" },
        { optionText: "Mandya" },
      ],
      answer:false,
      answerKey:"",
      points:0,

      open: true,
      required: false,
    },
  ]);
  function changeQuestion(text,i){
     var newQuestion=[...questions];
     newQuestion[i].questionText=text;
     setQuestions(newQuestion);
     console.log(newQuestion);
  }
  function addQuestionType(i,type){
    let qs=[...questions];
     console.log(type)
     qs[i].questionType=type;
     setQuestions(qs)
  }
  function removeOption(i,j){
    var RemoveOptionsQuestion=[...questions];
if(RemoveOptionsQuestion[i].options.length>1){
  RemoveOptionsQuestion[i].options.splice(j,1)
  setQuestions(RemoveOptionsQuestion)
}
  }
  function addOption(i){
    var optionsofQuestions=[...questions];
    if(optionsofQuestions[i].options.length<5){
      optionsofQuestions[i].options.push({optionText:"Option" +(optionsofQuestions[i].options.length+1)})
    }else{
      alert("Max 5 options allowed")
    }
    setQuestions(optionsofQuestions);
  }
  function changeOptionValue(text,i,j){
     var optionQuestion=[...questions];
     optionQuestion[i].options[j].optionText=text;
     setQuestions(optionQuestion);
  }
  function copyQuestion(i){
    expandcloaseAll()
   let qs=[...questions];
   var newQuestion={...qs[i]};
   setQuestions([...questions,newQuestion])
  }
  function deleteQuestion(i){
   let qs=[...questions];
  if(questions.length>1){
    qs.splice(i,1);

  }
  setQuestions(qs);
  }
  function requiredQuestion(i){
    var reqquestion=[...questions];
    reqquestion[i].required=!reqquestion[i].required
   
    setQuestions(reqquestion);
  }
function expandcloaseAll(){
  let qs=[...questions];
  for (let j = 0; j <qs.length; j++) {
    
    qs[j].open=false;
  }
  setQuestions(qs);
}
function addmoreQuestionField(){
  expandcloaseAll()
  setQuestions([...questions, {questionText:"Question",questionType:"radio",options:[{optionText:"Option 1"}],open:true,required:false}])
}
function handleExpand(i){
  let qs=[...questions];
  for (let j = 0; j <qs.length; j++) {
    
    if(i===j){
      qs[i].open=true;
    }else{
      qs[j].open=false;
    }
  }
  setQuestions(qs);
}
 
function setOptionAnswer(ans,qno){
var Questions=[...questions];
Questions[qno].answerKey=ans
setQuestions(Questions);
console.log(qno+" "+ans);
}

function doneanswer(i){
  var answerofQuestion=[...questions];
  answerofQuestion[i].answer=!answerofQuestion[i].answer;
  setQuestions(answerofQuestion);
}

function addanswer(i){
  var answerofQuestion=[...questions];
  answerofQuestion[i].answer=!answerofQuestion[i].answer;
  setQuestions(answerofQuestion);
}

  function onDragEnd(result){
    if(!result.destination){
      return;
    }
    var itemgg=[...questions];
    const itemF=reorder(
      itemgg,
      result.source.index,
      result.destination.index
    )
    setQuestions(itemF);
  }

  const reorder=(list,startIndex,endIndex)=>{
    const result=Array.from(list);
    const [removed]=result.splice(startIndex,1)
    result.splice(endIndex,0,removed)
    return result;
  }
  function questionUi() {
    return questions.map((ques, i) => (
         <Draggable key={i} draggableId={i+'id'} index={i}>
          {(provided,snapshot)=>(
            
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <div>
                <div style={{marginBottom:"0px"}}>
                  <div style={{width:"100%",marginBottom:"0px",}}>
                    <DragIndicatorIcon style={{transform:"rotate(-90deg",color:"#DAE0E2",position:"relative",left:"300px"}} fontSize="small"/>
                  </div>
                  <div>
      <Accordion expanded={questions[i].open} onChange={()=>{handleExpand(i)}} className={questions[i].open ? "add_border" : ""}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          elevation={1}
          style={{ width: "100%" }}
        >
            {!questions[i].open?(
          <div className="saved_questions">
               <Typography style={{fontSize:"15px",fontWeight:"400",letterSpacing:".1px",lineHeight:"24px",paddingBottom:'8px'}}>{i+1}.  {questions[i].questionText}</Typography>

               {ques.options.map((op,j)=>(
                <div key={j}>
                  <div style={{display:'flex'}}>
                    <FormControlLabel style={{marginLeft:"5px",marginBottom:"5px",}} disabled control={<input type={ques.questionType} color="primary" style={{marginRight:"3px"}} required={ques.type}/>} label={
                      <Typography style={{fontFamily:"Roboto,Arial,sans-serif",fontSize:'13px',fontWeight:"400",letterSpacing:".2px",lineHeight:"20px",color:'#202124'}}>{ques.options[j].optionText}</Typography>
                    }/>
                  </div>
                </div>
               ))}
          </div>
        ):""}
        </AccordionSummary>

      
{questions[i].open?(
        <div className="question_boxes">
          <AccordionDetails className="add_questions">
            <div className="add_question_top">
              <input
                type="text"
                className="question"
                placeholder="Question"
                value={ques.questionText}
                onChange={(e)=>{changeQuestion(e.target.value,i)}}
              ></input>
              <CropOriginalIcons style={{ color: "5f6368" }} />
              <Select
                className="select"
                style={{ color: "#5f6368", fontSize: "13px" }}
              >
                <MenuItem id="text" value="text" onClick={()=>{addQuestionType(i,"text")}}>
                  <SubjectIcon style={{ marginRight: "10px" }}  />
                  Paragraph
                </MenuItem>
                <MenuItem id="checkbox" value="Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}>
                  <CheckBoxIcon
                    style={{ marginRight: "10px", color: "#70757a" }}
                    checked 
                  />
                  CheckBoxes
                </MenuItem>
                <MenuItem id="radio" value="Radio" onClick={()=>{addQuestionType(i,"radio")}}>
                  <Radio
                    style={{ marginRight: "10px", color: "#70757a" }}
                    checked 
                  />
                  Multiple Choice
                </MenuItem>
              </Select>
            </div>
            {ques.options.map((op, j) => (
              <div className="add_questions_body" key={j}>
                {ques.questionType != "text" ? (
                  <input
                    type={ques.questionType}
                    style={{ marginRight: "10px" }}
                  />
                ) : (
                  <ShortTextIcon style={{ marginRight: "10px" }} />
                )}
                <div>
                  <input
                    type="text"
                    className="text_input"
                    placeholder="option"
                    value={ques.options[j].optionText}
                    onChange={(e)=>{changeOptionValue(e.target.value,i,j)}}
                  ></input>
                </div>
                <CropOriginalIcons style={{ color: "#5f6368" }} />
                <IconButton aria-label="delete">
                  <CloseIcon  onClick={()=>{removeOption(i,j)}}/>
                </IconButton>
              </div>
            ))}

            {ques.options.length<5?(
                <div className="add_question_body">
                    <FormControlLabel disabled control={
                        (ques.questionType!="text")?
                        <input type={ques.questionType} color="primary" inputProps={{'aria-label':'secondary checkbox'}}
                        style={{marginLeft:"10px",marginRight:'10px'}} disabled/>:
                        <ShortTextIcon style={{marginRight:"10px"}}/>
                    } label={
                        <div>
                            <input type="text" className="text_input" style={{fontSize:"13px",width:"60px"}} placeholder="Add other"></input>
                            <Button size="small" style={{textTransform:"none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}} onClick={()=>{addOption(i)}}>
                               Add Option </Button>
                        </div>
                    }/>
                </div>
            ):""}
            <div className="add_footer">
              <div className="add_question_bottom_left">
                <Button
                  size="small"
                  style={{
                    textTransform: "none",
                    color: "#4285f4",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  <FcRightUp
                    style={{
                      border: "2px solid #42854",
                      padding: "2px",
                      marginRight: "8px",
                    }}
                  />
                  Answer Key
                </Button>
              </div>
              <div className="add_question_bottom">
                <IconButton aria-label="copy" onClick={()=>{copyQuestion(i)}}>
                  <FilterNoneIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={()=>{deleteQuestion(i)}}>
                  <BsTrash />
                </IconButton>
                <span style={{ color: "#5f6368", fontSize: "13px" }} >
                  Required
                </span>{" "}
                <Switch name="checkedA" color="primary"  onClick={()=>{requiredQuestion(i)}}/>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
          </AccordionDetails>
          <div className="question_edit">
            <AddCircleOutlineIcon size="small" className="edit" onClick={addmoreQuestionField}/>
            <OndemandVideoIcon size="small" className="edit"/>
            <CropOriginalIcons size="small" className="edit"/>
            <TextFieldIcon size="small" className="edit"/>
          </div>
        </div>
        ):" "}
      </Accordion>
      </div>
                </div>
              </div>
            </div>
          )}

         </Draggable>
    ));
  }
  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled Document"
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                style={{ color: "black" }}
                placeholder="Form Description"
              ></input>
            </div>
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
  {(provided, snapshot) => (
    <div {...provided.droppableProps} ref={provided.innerRef }>
      {questionUi()}
      {provided.placeholder}
    </div>
  )}
</Droppable>
          </DragDropContext>
        
        </div>
      </div>
    </div>
  );
}

export default Question_form;
