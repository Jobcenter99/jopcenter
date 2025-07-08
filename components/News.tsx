import React, { useState, useEffect } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Star,
  Search,
  Save,
  X,
  LogOut,
  BarChart3,
  FileText,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const API_BASE = 'http://localhost:3001/api';

const AdminPanel = () => {
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [authError, setAuthError] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    summary: '',
    featured: false,
    published: false,
    image: null,
  });

  // Login state
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  // Mock data for demonstration
  const mockStats = {
    totalNews: 45,
    publishedNews: 38,
    featuredNews: 12,
    draftNews: 7,
  };

  const mockNews = [
    {
      id: 1,
      title: 'New Job Opportunities in Tech Sector',
      content: 'The tech industry continues to grow with new opportunities emerging...',
      summary: 'Latest job openings in technology companies across the region.',
      featured: true,
      published: true,
      author: 'Admin',
      createdAt: '2024-01-15T10:30:00Z',
      image: null,
    },
    {
      id: 2,
      title: 'Career Fair Schedule Updated',
      content: 'We have updated the schedule for the upcoming career fair...',
      summary: 'Important updates regarding the career fair timing and venues.',
      featured: false,
      published: true,
      author: 'Admin',
      createdAt: '2024-01-14T14:20:00Z',
      image: null,
    },
    {
      id: 3,
      title: 'Skills Development Workshop',
      content: 'Join our comprehensive skills development workshop...',
      summary: 'Learn new skills to advance your career prospects.',
      featured: true,
      published: false,
      author: 'Admin',
      createdAt: '2024-01-13T09:15:00Z',
      image: null,
    },
  ];

  const mockPagination = {
    totalPages: 5,
    currentPage: 1,
    totalItems: 45,
    itemsPerPage: 10,
  };

  useEffect(() => {
    // Simulate checking for stored auth token
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('adminToken');
      if (token) {
        const userData = JSON.parse(localStorage.getItem('adminUser') || '{}');
        setUser(userData);
        loadMockData();
      }
    }
  }, []);

  const loadMockData = () => {
    setNews(mockNews);
    setStats(mockStats);
    setPagination(mockPagination);
  };

  const login = async () => {
    setLoading(true);
    setAuthError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (loginData.username === 'admin' && loginData.password === 'password') {
        const userData = { username: 'admin', role: 'administrator' };
        const token = 'mock-jwt-token';
        
        // Only use localStorage if available
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('adminToken', token);
          localStorage.setItem('adminUser', JSON.stringify(userData));
        }
        
        setUser(userData);
        loadMockData();
      } else {
        setAuthError('Invalid credentials. Try admin/password');
      }
    } catch (error) {
      setAuthError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
    }
    setUser(null);
    setNews([]);
    setStats({});
    setActiveTab('dashboard');
  };

  const fetchNews = async (page = 1, search = '') => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      let filteredNews = mockNews;
      if (search) {
        filteredNews = mockNews.filter(item => 
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.summary.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      setNews(filteredNews);
      setCurrentPage(page);
      setPagination({
        ...mockPagination,
        currentPage: page,
        totalItems: filteredNews.length,
      });
    } catch (error) {
      console.error('Failed to fetch news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (editingNews) {
        // Update existing news
        const updatedNews = news.map(item => 
          item.id === editingNews.id 
            ? { ...item, ...formData, updatedAt: new Date().toISOString() }
            : item
        );
        setNews(updatedNews);
      } else {
        // Add new news
        const newNews = {
          id: Date.now(),
          ...formData,
          author: user.username,
          createdAt: new Date().toISOString(),
        };
        setNews([newNews, ...news]);
      }

      setShowModal(false);
      setEditingNews(null);
      resetForm();
      
      // Update stats
      const newStats = { ...stats };
      if (!editingNews) {
        newStats.totalNews += 1;
        if (formData.published) newStats.publishedNews += 1;
        if (formData.featured) newStats.featuredNews += 1;
        if (!formData.published) newStats.draftNews += 1;
      }
      setStats(newStats);
    } catch (error) {
      alert('Failed to save news');
    } finally {
      setLoading(false);
    }
  };

  const deleteNews = async (id) => {
    if (!confirm('Are you sure you want to delete this news item?')) return;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const itemToDelete = news.find(item => item.id === id);
      setNews(news.filter(item => item.id !== id));
      
      // Update stats
      const newStats = { ...stats };
      newStats.totalNews -= 1;
      if (itemToDelete.published) newStats.publishedNews -= 1;
      if (itemToDelete.featured) newStats.featuredNews -= 1;
      if (!itemToDelete.published) newStats.draftNews -= 1;
      setStats(newStats);
    } catch (error) {
      alert('Failed to delete news');
    }
  };

  const toggleFeatured = async (id) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const updatedNews = news.map(item => 
        item.id === id ? { ...item, featured: !item.featured } : item
      );
      setNews(updatedNews);
      
      // Update stats
      const item = news.find(n => n.id === id);
      const newStats = { ...stats };
      if (item.featured) {
        newStats.featuredNews -= 1;
      } else {
        newStats.featuredNews += 1;
      }
      setStats(newStats);
    } catch (error) {
      alert('Failed to update news');
    }
  };

  const togglePublished = async (id) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const updatedNews = news.map(item => 
        item.id === id ? { ...item, published: !item.published } : item
      );
      setNews(updatedNews);
      
      // Update stats
      const item = news.find(n => n.id === id);
      const newStats = { ...stats };
      if (item.published) {
        newStats.publishedNews -= 1;
        newStats.draftNews += 1;
      } else {
        newStats.publishedNews += 1;
        newStats.draftNews -= 1;
      }
      setStats(newStats);
    } catch (error) {
      alert('Failed to update news');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      summary: '',
      featured: false,
      published: false,
      image: null,
    });
  };

  const openEditModal = (newsItem) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      content: newsItem.content,
      summary: newsItem.summary,
      featured: newsItem.featured,
      published: newsItem.published,
      image: null,
    });
    setShowModal(true);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchNews(1, searchTerm);
  };

  const handlePageChange = (page) => {
    fetchNews(page, searchTerm);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Admin Login
          </h1>
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) =>
                  setLoginData({ ...loginData, username: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {authError && (
              <div className="text-red-600 text-sm text-center">
                {authError}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            Demo credentials: admin / password
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">JobCenter Admin</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Welcome, {user.username}
            </span>
            <button
              onClick={logout}
              className="flex items-center space-x-1 text-red-600 hover:text-red-800"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Navigation */}
        <nav className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BarChart3 size={18} className="inline mr-2" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === 'news'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <FileText size={18} className="inline mr-2" />
              News Management
            </button>
          </div>
        </nav>

        {/* Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Total News
              </h3>
              <p className="text-3xl font-bold text-blue-600">
                {stats.totalNews || 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Published
              </h3>
              <p className="text-3xl font-bold text-green-600">
                {stats.publishedNews || 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Featured
              </h3>
              <p className="text-3xl font-bold text-yellow-600">
                {stats.featuredNews || 0}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Drafts
              </h3>
              <p className="text-3xl font-bold text-gray-600">
                {stats.draftNews || 0}
              </p>
            </div>
          </div>
        )}

        {/* News Management */}
        {activeTab === 'news' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
                <h2 className="text-xl font-semibold text-gray-800">
                  News Management
                </h2>
                <button
                  onClick={() => {
                    setEditingNews(null);
                    resetForm();
                    setShowModal(true);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
                >
                  <Plus size={18} />
                  <span>Add News</span>
                </button>
              </div>

              <div className="mt-4 flex space-x-2">
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSearch}
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                        </div>
                      </td>
                    </tr>
                  ) : news.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                        No news items found
                      </td>
                    </tr>
                  ) : (
                    news.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {item.image && (
                              <img
                                src={`http://localhost:3001${item.image}`}
                                alt={item.title}
                                className="h-10 w-10 object-cover rounded mr-3"
                              />
                            )}
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {item.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {item.summary?.slice(0, 50)}...
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              item.published
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {item.published ? 'Published' : 'Draft'}
                          </span>
                          {item.featured && (
                            <span className="inline-flex ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Featured
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {item.author || user.username}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => openEditModal(item)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => deleteNews(item.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 size={16} />
                            </button>
                            <button
                              onClick={() => toggleFeatured(item.id)}
                              className="text-yellow-600 hover:text-yellow-800"
                            >
                              <Star size={16} />
                            </button>
                            <button
                              onClick={() => togglePublished(item.id)}
                              className="text-green-600 hover:text-green-800"
                            >
                              {item.published ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex justify-between items-center border-t">
              <div className="text-sm text-gray-700">
                Showing {((currentPage - 1) * pagination.itemsPerPage) + 1} to{' '}
                {Math.min(currentPage * pagination.itemsPerPage, pagination.totalItems)} of{' '}
                {pagination.totalItems} results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === pagination.totalPages}
                  className="px-3 py-1 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {editingNews ? 'Edit News' : 'Add News'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Summary
                </label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Featured</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Published</span>
                </label>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center space-x-2"
                >
                  <Save size={16} />
                  <span>{loading ? 'Saving...' : 'Save'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;