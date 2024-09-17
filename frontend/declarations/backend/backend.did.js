export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'textToSpeech' : IDL.Func([IDL.Text], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
