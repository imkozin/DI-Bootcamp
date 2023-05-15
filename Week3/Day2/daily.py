class Pagination():
    def __init__(self, items=None, pageSize=10):
        self.items = items
        self.page_size= int(pageSize)
        self.total_pages = len(self.items) // self.page_size + 1
        self.current_page = 0

    def getVisibleItems(self):
        first = self.current_page * self.page_size
        return self.items[first:first + self.page_size]
    
    def nextPage(self):
        self.current_page += 1
        self.current_page = 0 if self.current_page >= self.total_pages else self.current_page  # last then first again
        return self

    def prevPage(self):
        self.current_page -= 1
        self.current_page = (self.current_page + self.total_pages) % self.total_pages  # first page then last again
        return self
    
    def firstPage(self):
        self.current_page = 0
        return self
    
    def lastPage(self):
        self.current_page = self.total_pages - 1
        return self
    
    def goToPage(self, pageNum):
        if pageNum < 1:
            pageNum = 1
        elif pageNum > self.total_pages:
            pageNum = self.total_pages
        self.current_page = pageNum - 1
        return self
     
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)


print(p.getVisibleItems())
# ["a", "b", "c", "d"]

p.nextPage()

print(p.getVisibleItems())
# ["e", "f", "g", "h"]

p.firstPage()

print(p.getVisibleItems())
# ["a", "b", "c", "d"]

p.lastPage()

print(p.getVisibleItems())
# ["y", "z"]

p.goToPage(2)

print(p.getVisibleItems())
# ["e", "f", "g", "h"]