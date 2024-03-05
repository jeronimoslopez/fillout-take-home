export enum QuestionType {
    Address = 'Address',
    AudioRecording = 'AudioRecording',
    Calcom = 'Calcom',
    Calendly = 'Calendly',
    Captcha = 'Captcha',
    Checkbox = 'Checkbox',
    Checkboxes = 'Checkboxes',
    ColorPicker = 'ColorPicker',
    CurrencyInput = 'CurrencyInput',
    DatePicker = 'DatePicker',
    DateRange = 'DateRange',
    DateTimePicker = 'DateTimePicker',
    Dropdown = 'Dropdown',
    EmailInput = 'EmailInput',
    FileUpload = 'FileUpload',
    ImagePicker = 'ImagePicker',
    LocationCoordinates = 'LocationCoordinates',
    LongAnswer = 'LongAnswer',
    Matrix = 'Matrix',
    MultiSelect = 'MultiSelect',
    MultipleChoice = 'MultipleChoice',
    NumberInput = 'NumberInput',
    OpinionScale = 'OpinionScale',
    Password = 'Password',
    Payment = 'Payment',
    PhoneNumber = 'PhoneNumber',
    Ranking = 'Ranking',
    RecordPicker = 'RecordPicker',
    ShortAnswer = 'ShortAnswer',
    Signature = 'Signature',
    Slider = 'Slider',
    StarRating = 'StarRating',
    Switch = 'Switch',
    TimePicker = 'TimePicker',
    URLInput = 'URLInput'
}

export enum CalculationType {
    Number = 'Number',
    String = 'String'
}

export interface IQuestion {
    id: string;
    name: string;
    type: QuestionType;
    value: string;
}

export interface ICalculation {
    id: string;
    name: string;
    type: CalculationType;
    value: string;
}

export interface IUrlParameters {
    id: string;
    name: string;
    value: string;
}

export interface IQuiz {
    score: number;
    maxScore: number;
}

export interface IResponse {
    questions: IQuestion[];
    calculations: ICalculation[];
    urlParameters: IUrlParameters[];
    quiz?: IQuiz;
    submissionId: string;
    submissionTime: string;
}

export interface IResponses {
    responses: IResponse[];
    totalResponses: number;
    pageCount: number;
}
