const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 12;

function getPagination(query) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  console.log(page);
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = limit * (page - 1);

  return {
    skip,
    limit,
  };
}

module.exports = {
  getPagination,
};
