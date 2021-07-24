import api from '../utils/api';

export const listAuthors = async () => {
    const response = await api.get('authors');
    return response.data;
};

export const getAuthor = async (authorId) => {
    const response = await api.get(`authors/${authorId}`);
    return response.data;
};

export const createAuthor = async (payload) => {
    const response = await api.post('authors', payload);
    return response.data;
};

export const editAuthor = async (authorId, payload) => {
    const response = await api.put(`authors/${authorId}`, payload);
    return response.data;
};
