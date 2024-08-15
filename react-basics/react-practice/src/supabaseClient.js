import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export const getAllThings = async () => {
    const { data, error } = await supabase
      .from('things') // from "things" table on supabase
      .select('*'); // select all rows, [ {row_object}, {row_object}, {row_object} ]
  
    if (error) throw error;
    return data;
  };
  
  export const getThingById = async (id) => {
    const { data, error } = await supabase
      .from('things')
      .select('*')
      .eq('id', id) // select row where id = id, [ {row_object} ]
      .single(); // return single row from query array, { row_object }
  
    if (error) throw error;
    return data;
  };
  
  export const createThing = async (thing) => {
    const { data, error } = await supabase
        .from('things')
        .insert([thing])
        .select('*')
        .single();

    if (error) throw error;
    return data
  };


  export const updateThing = async (id, updates) => {
    const { data, error } = await supabase
      .from('things')
      .update(updates)
      .eq('id', id);
  
    if (error) throw error;
    return data;
  };
  
  export const deleteThing = async (id) => {
    const { data, error } = await supabase
      .from('things')
      .delete()
      .eq('id', id);
  
    if (error) throw error;
    return data;
  };

export default supabase;
