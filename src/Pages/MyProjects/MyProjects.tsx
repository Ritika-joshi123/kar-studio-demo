import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProjects } from '../../Services';
import { Project } from '../../Interfaces';
import { OverlayLoader } from '../../Shared';

const MyProjects: FC = () => {
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects(pageSize, pageNumber);
  }, [pageSize, pageNumber]);

  const loadProjects = async (pageSize: number, pageNumber: number) => {
    if (!isLoading) setIsLoading(true);

    try {
      const { data } = await getProjects({
        pageNumber,
        limit: pageSize,
        direction: 'ASC',
        sortBy: 'createdDate',
      });

      const { content, totalPages } = data;

      setProjects(content);
      setTotalPages(totalPages);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onPageSizeChange = (nextPage: string) => {
    const parsedPageSize = Number(nextPage);
    setPageSize(parsedPageSize && parsedPageSize > 0 ? parsedPageSize : 10);
  };

  const loadNextPage = () => {
    // let nextPageNumber = pageNumber;
    // setPageNumber(++nextPageNumber);
  };

  const loadPreviousPage = () => {
    // setPageNumber(pageNumber - 1);
  };

  return (
    <>
      {isLoading && <OverlayLoader />}

      <div className="edit-box">
        <Box className="container">
          <div className="project-header">
            <h2>My Projects</h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search plate..."
                className="search-input"
                style={{
                  color: '#6B7280',
                  width: '100%',
                  borderRadius: '16px',
                  padding: '12px 44px',
                  outline: 'none',
                  fontSize: '20px',
                }}
              />
            </div>
            <button
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/editor/new')}
              className="btn"
            >
              + New Project
            </button>
          </div>

          <div className="projects-cards">
            <div>
              <div
                style={{ cursor: 'pointer' }}
                className="project-card add-new"
                onClick={() => {
                  navigate('/editor/new');
                }}
              >
                <div className="add-icon-container">
                  <i className="upload-icon"></i>
                  <span>Click here for the New Project</span>

                  <h2 style={{ marginBottom: '1rem' }}>NEW</h2>

                  <button className="add-btn">ADD</button>
                </div>
              </div>
            </div>
            {projects.map((item, index) => (
              <div key={index}>
                <div className="project-card">
                  <div className="img">
                    <img
                      src={
                        item?.carStudio?.afterStudioImages[0]
                          .afterStudioImageUrl
                      }
                      alt="CarImage"
                      className="car-image"
                    />
                  </div>
                  <div className="project-details">
                    <div className="left">
                      <h3>Unnamed</h3>
                      <div className="d-flex">
                        <p>
                          <i className="calendar-icon"></i> 15.08.2024
                        </p>
                        <p>
                          <i className="upload-sm-icon"></i>{' '}
                          {item?.carStudio?.afterStudioImages.length > 0
                            ? item?.carStudio?.afterStudioImages.length
                            : 1}{' '}
                          Uploads
                        </p>
                      </div>
                    </div>

                    <div className="btn-div">
                      <button
                        onClick={() =>
                          navigate('/editor/new', { state: { index } })
                        }
                        className="edit-btn"
                      >
                        Edit <i className="caret-right-icon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination-container">
            <label htmlFor="view-select">View</label>
            <select
              id="view-select"
              value={pageSize.toString()}
              onChange={(event) => onPageSizeChange(event.target.value)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <div className="pagination-controls">
              <span>1-1 of {totalPages}</span>

              {pageNumber > 1 && totalPages > 1 && (
                <button
                  onClick={loadNextPage}
                  // onClick={() => {
                  //   if (currPage > 0) {
                  //     setCurrPage((page) => page - 1);
                  //   }
                  // }}
                  className="pagination-btn prev"
                >
                  <i className="prev-icon"></i>
                </button>
              )}

              {totalPages > 1 && pageNumber < totalPages && (
                <button
                  onClick={loadPreviousPage}
                  // onClick={() => {
                  //   if (currPage < apiResult.totalPages) {
                  //     setCurrPage((page) => page + 1);
                  //   }
                  // }}
                  className="pagination-btn next"
                >
                  <i className="next-icon"></i>
                </button>
              )}
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default MyProjects;
