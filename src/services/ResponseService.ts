import {ResponseFilter, ResponseParams, ResponseCollection} from '@src/models/Response';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import ResponseRepo from '@src/repos/ResponseRepo';

function filterCollection(collection: ResponseCollection, query: ResponseParams): ResponseCollection {
  if (!query.filters) {
    return collection;
  }

  let filters: ResponseFilter[] = [];
  try {
    filters = JSON.parse(query.filters) as ResponseFilter[];
  } catch(error) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      'Invalid filters');
  }

  if (filters.length === 0) {
    return collection;
  }

  const filteredResponses = collection.responses.filter((response) => {
    return filters.every((filter) => {
      const question = response.questions.find((question) => question.id === filter.id);
      if (question === undefined) {
        return false;
      }
      const questionValue = isNaN(Date.parse(question.value)) ? question.value : new Date(question.value);
      const filterValue = isNaN(Date.parse(filter.value.toString())) ? filter.value : new Date(filter.value);
      switch (filter.condition) {
      case 'equals':
        if (questionValue instanceof Date && filterValue instanceof Date) {
          return questionValue.getTime() === filterValue.getTime();
        } else {
          return questionValue === filterValue;
        }
      case 'does_not_equal':
        if (questionValue instanceof Date && filterValue instanceof Date) {
          return questionValue.getTime() !== filterValue.getTime();
        } else {
          return questionValue !== filterValue;
        }
      case 'greater_than':
        if (questionValue instanceof Date && filterValue instanceof Date) {
          return questionValue.getTime() > filterValue.getTime();
        } else {
          return Number(questionValue) > Number(filterValue);
        }
      case 'less_than':
        if (questionValue instanceof Date && filterValue instanceof Date) {
          return questionValue.getTime() < filterValue.getTime();
        } else {
          return Number(questionValue) < Number(filterValue);
        }
      }
    });
  });
  return {
    responses: filteredResponses,
    totalResponses: filteredResponses.length,
    pageCount: filteredResponses.length / Number(query.limit),
  };
}

export async function getAll(id: string, query: ResponseParams): Promise<ResponseCollection> {
  try {
    const collection = await ResponseRepo.getAll(id, query);
    return filterCollection(collection, query);
  } catch(error) {
    throw new RouteError(
      HttpStatusCodes.INTERNAL_SERVER_ERROR,
      'Error fetching responses');
  }
}

export default {
  getAll,
} as const;